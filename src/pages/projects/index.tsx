import { type NextPage } from "next";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";
import { Typography } from "@component/components/Typography";

type Project = RouterOutputs["projects"]["getAll"][number];

const ProjectsPage: NextPage = () => {
  const { data: projects } = api.projects.getAll.useQuery();

  if (!projects) {
    return <h1>no data</h1>;
  }

  return (
    <div className="flex flex-col gap-12 text-right">
      {projects?.map((project: Project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className=" duration-300 hover:opacity-40"
        >
          <Typography variant="title">{project.title}</Typography>
          <Typography variant="heading">{project.date}</Typography>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsPage;
