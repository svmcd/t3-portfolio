import { type NextPage } from "next";
import { api } from "@component/utils/api";

export type Post = {
  id: string;
  title: string;
  content: string;
  technologies: string[];
  date: Date;
  link1: string;
  link2: string;
};

const CreatePostWizard = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

const Posts: NextPage = () => {
  const { data: posts } = api.posts.getAll.useQuery();

  return (
    <>
      {posts?.map((post) => (
        <div key={post.id}>
          <div key={post.id}>{post.title}</div>
          <p>{post.content}</p>
        </div>
      ))}
      <CreatePostWizard />
    </>
  );
};

export default Posts;
