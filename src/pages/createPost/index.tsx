import { type NextPage } from "next";
import { api, type RouterOutputs } from "@component/utils/api";
import { useState } from "react";
import { useSession, getSession } from "next-auth/react";

type Post = RouterOutputs["posts"]["getAll"][number];

const defaultFormData = {
  id: "",
  title: null,
  imageUrl: null,
  content: null,
  technologies: null,
  year: null,
  link1: null,
  link2: null,
};

const CreatePost: NextPage = () => {
  const [formData, setFormData] = useState<Post>(defaultFormData);

  const { mutate, isLoading } = api.posts.create.useMutation({
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
          if (key === "imageUrl") {
            return (
              <input
                key={key}
                type="file"
                name={key}
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
              value={formData[key as keyof Post] || ""}
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

export default CreatePost;
