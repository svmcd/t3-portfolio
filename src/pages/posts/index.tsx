import { type NextPage } from "next";
import Image from "next/image";
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
        <div key={post.id} className="round my-4 bg-slate-800 p-4">
          <div key={post.id}>{post.title}</div>
          <Image src={post.image} alt={post.title} width={56} height={56} />
          <p>{post.content}</p>
          <p>{post.year}</p>
        </div>
      ))}
      <CreatePostWizard />
    </>
  );
};

export default PostsPage;
