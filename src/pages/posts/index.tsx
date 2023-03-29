import { type NextPage } from "next";
import { api, RouterOutputs } from "@component/utils/api";

type Post = RouterOutputs["posts"]["getAll"][number];

const CreatePostWizard = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

const PostsPage: NextPage = () => {
  const { data: posts } = api.posts.getAll.useQuery();

  return (
    <>
      {posts?.map((post: Post) => (
        <div key={post.id}>
          <div key={post.id}>{post.title}</div>
          <p>{post.content}</p>
          <p>{post.year}</p>
        </div>
      ))}
      <CreatePostWizard />
    </>
  );
};

export default PostsPage;
