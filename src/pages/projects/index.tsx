import { type NextPage } from "next";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";
import { Typography } from "@component/components/Typography";
import { Motion } from "@component/components/Motion";

type Project = RouterOutputs["projects"]["getAll"][number];

const ProjectsPage: NextPage = () => {
  const { data: projects } = api.projects.getAll.useQuery();

  if (!projects) {
    return <h1>no data</h1>;
  }

  return (
    <Motion>
      <div className="flex flex-col items-end gap-8 text-right">
        {projects?.map((project: Project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className=" duration-300 hover:opacity-40"
          >
            <Typography variant="title">{project.title}</Typography>
            <Typography variant="text">{project.date}</Typography>
          </Link>
        ))}
      </div>
    </Motion>
  );
};

export default ProjectsPage;
