import { type NextPage } from "next";
import Image from "next/image";
import { api, type RouterOutputs } from "@component/utils/api";
import { useState } from "react";

type Post = RouterOutputs["posts"]["getAll"][number];

const defaultFormData = {
  id: "",
  title: null,
  image: null,
  content: null,
  technologies: null,
  year: null,
  link1: null,
  link2: null,
};

const CreatePostWizard = () => {
  const [formData, setFormData] = useState<Post>(defaultFormData);

  const { mutate, isLoading } = api.posts.create.useMutation({
    onSuccess: () => {
      console.log("succ");
      console.log(formData);
      setFormData(defaultFormData);
      console.log(formData);
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
      <input type="submit" />
    </form>
  );
};

const PostsPage: NextPage = () => {
  const { data: posts } = api.posts.getAll.useQuery();

  return (
    <>
      <CreatePostWizard />
      {posts?.map((post: Post) => (
        <div key={post.id} className="round my-4 bg-slate-800 p-4">
          <div key={post.id}>{post.title}</div>
          {post.image && (
            <Image
              src={post.image || ""}
              alt={post.title || ""}
              width={200}
              height={200}
            />
          )}
          <p>{post.content}</p>
          <p>{post.year}</p>
        </div>
      ))}
    </>
  );
};

export default PostsPage;
