import { useRouter } from "next/router";
import { api } from "@component/utils/api";

const Post = () => {
  const router = useRouter();
  const { post } = router.query;
  const { data: posts } = api.posts.getAll.useQuery();

  const foundPost = posts?.find((p) => p.id === post);

  return <p>{foundPost?.title}</p>;
};

export default Post;
