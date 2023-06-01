import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "@component/utils/api";
import { Motion } from "@component/components/Motion";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { motion } from "framer-motion";

const Project = () => {
  const router = useRouter();
  const { data: projects } = api.projects.getAll.useQuery();

  const foundProject = projects?.find((p) => p.id === router.query.projectId);

  const marqueeVariants = {
    animate: {
      x: [0, -888],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <Motion>
      <div
        key={foundProject?.id}
        className="flex max-w-xs flex-col gap-2 overflow-x-hidden"
      >
        <Typography variant="title">{foundProject?.title}</Typography>
        <motion.div
          className="whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <Typography variant="text">
            {`${
              foundProject?.technologies?.toUpperCase().replace(/ /g, " ") ??
              "no technologies specified"
            } `.repeat(5)}
          </Typography>
        </motion.div>
        <Typography variant="text">{foundProject?.content}</Typography>
        <Typography variant="heading">{foundProject?.date}</Typography>
        <div className="flex items-center justify-end gap-2">
          {foundProject?.link1 && (
            <Link target="_blank" href={foundProject.link1}>
              <Typography variant="text">Live</Typography>
            </Link>
          )}
          <span>•</span>
          {foundProject?.link2 && (
            <Link target="_blank" href={foundProject.link2}>
              <Typography variant="text">GitHub</Typography>
            </Link>
          )}
        </div>
      </div>
    </Motion>
  );
};

export default Project;
