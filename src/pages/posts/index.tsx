import { type NextPage } from "next";
import Image from "next/image";
import { api, type RouterOutputs } from "@component/utils/api";
import { useState } from "react";

type Post = RouterOutputs["posts"]["getAll"][number];

const CreatePostWizard = () => {
  const [formData, setFormData] = useState<Post>({
    id: "",
    image: "",
    title: "",
    content: "",
    technologies: "",
    year: "",
    link1: "",
    link2: "",
  });

  const { mutate } = api.posts.createPost.useMutation();

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
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="content"
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="technologies"
          placeholder="technologies"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="year"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="link1"
          placeholder="link1"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="link2"
          placeholder="link2"
          onChange={handleInputChange}
        />
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
