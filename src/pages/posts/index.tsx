import { type NextPage } from "next";
import Image from "next/image";
import { api, type RouterOutputs } from "@component/utils/api";

type Post = RouterOutputs["posts"]["getAll"][number];

const PostsPage: NextPage = () => {
  const { data: posts } = api.posts.getAll.useQuery();

  return (
    <>
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
