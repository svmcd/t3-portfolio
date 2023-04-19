import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";

type Project = RouterOutputs["projects"]["getAll"][number];

const ProjectsPage: NextPage = () => {
  const { data: projects } = api.projects.getAll.useQuery();

  if (!projects) {
    return <h1>no data</h1>;
  }

  return (
    <div className="scrollbar-hide fixed right-[33px] top-0 h-screen overflow-y-scroll">
      {projects?.map((project: Project) => (
        <div key={project.id} className="round my-4 bg-slate-100 p-4">
          <div>{project.title}</div>
          {project.imageUrl && (
            <Image
              src={project.imageUrl || ""}
              alt={project.title || ""}
              width={100}
              height={100}
            />
          )}
          <p>
            {project.technologies?.toUpperCase().replace(/ /g, ", ") ??
              "no technologies specified"}
          </p>
          <p>{project.date}</p>
          <Link href={`/projects/${project.id}`}>read more</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
