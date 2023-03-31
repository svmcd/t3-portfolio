import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";

type Post = RouterOutputs["posts"]["getAll"][number];

const PostsPage: NextPage = () => {
  const { data: posts } = api.posts.getAll.useQuery();

  if (!posts) {
    return <h1>no data</h1>;
  }

  return (
    <>
      {posts?.map((post: Post) => (
        <div key={post.id} className="round my-4 bg-slate-200 p-4">
          <div key={post.id}>{post.title}</div>
          {post.imageUrl && (
            <Image
              src={post.imageUrl || ""}
              alt={post.title || ""}
              width={200}
              height={200}
            />
          )}
          <p>{post.content}</p>
          <p>
            {post.technologies?.toUpperCase().replace(/ /g, ", ") ??
              "no technologies specified"}
          </p>
          <p>{post.date}</p>
          <Link href={`/posts/${post.id}`}>read more</Link>
        </div>
      ))}
    </>
  );
};

export default PostsPage;
