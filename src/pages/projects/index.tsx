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
    <>
      {projects?.map((project: Project) => (
        <div key={project.id} className="round my-4 bg-slate-200 p-4">
          <div>{project.title}</div>
          {project.imageUrl && (
            <Image
              src={project.imageUrl || ""}
              alt={project.title || ""}
              width={200}
              height={200}
            />
          )}
          <p>
            {project.technologies?.toUpperCase().replace(/ /g, ", ") ??
              "no technologies specified"}
          </p>
          <Link href={`/projects/${project.id}`}>read more</Link>
        </div>
      ))}
    </>
  );
};

export default ProjectsPage;
