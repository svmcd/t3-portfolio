import { type NextPage } from "next";
import { useRouter } from "next/router";
import { api, type RouterOutputs } from "@component/utils/api";
import { useState } from "react";
import { useSession } from "next-auth/react";

type Project = RouterOutputs["projects"]["getAll"][number];

const defaultFormData = {
  id: "",
  title: null,
  imageUrl: null,
  content: null,
  technologies: null,
  date: null,
  link1: null,
  link2: null,
};

const CreateProject: NextPage = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState<Project>(defaultFormData);
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    void router.push("/");
    return null;
  }

  const { mutate, isLoading } = api.projects.create.useMutation({
    onSuccess: () => {
      setFormData(defaultFormData);
    },
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDataWithoutNulls = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value ?? undefined])
    );
    mutate(formDataWithoutNulls);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 text-black">
        {Object.entries(formData).map(([key]) => {
          if (key === "id") {
            return null; // don't render input for id
          }
          if (key === "content") {
            return (
              // render a textarea for content
              <textarea
                key={key}
                name={key}
                value={formData[key] || ""}
                placeholder={key}
                onChange={handleInputChange}
                disabled={isLoading}
              ></textarea>
            );
          }
          if (key === "date") {
            return (
              <input
                key={key}
                type="month"
                name={key}
                value={formData[key as keyof Project] || ""}
                placeholder={key}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            );
          }
          return (
            <input
              key={key}
              type="text"
              name={key}
              value={formData[key as keyof Project] || ""}
              placeholder={key}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          );
        })}
      </div>
      <button onSubmit={() => handleSubmit}>Done</button>
    </form>
  );
};

export default CreateProject;
