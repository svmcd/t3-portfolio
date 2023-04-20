import { type NextPage } from "next";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";
import { Typography } from "@component/components/Typography";
import { motion } from "framer-motion";

type Project = RouterOutputs["projects"]["getAll"][number];

const ProjectsPage: NextPage = () => {
  const { data: projects } = api.projects.getAll.useQuery();

  if (!projects) {
    return <h1>no data</h1>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
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
    </motion.div>
  );
};

export default ProjectsPage;
