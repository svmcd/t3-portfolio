import { useRouter } from "next/router";
import { api } from "@component/utils/api";

const Project = () => {
  const router = useRouter();
  const { data: projects } = api.projects.getAll.useQuery();

  const foundProject = projects?.find((p) => p.id === router.query.projectId);

  return <p>{foundProject?.title}</p>;
};

export default Project;
