import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "@component/utils/api";
import { MotionParent, MotionChild } from "@component/components/Motion";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { motion } from "framer-motion";
import { RiArrowRightUpLine, RiArrowLeftLine } from "react-icons/ri";

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
    <MotionParent>
      <MotionChild>
        <div
          key={foundProject?.id}
          className="flex max-w-[12rem] flex-col gap-2 overflow-x-hidden sm:max-w-xs"
        >
          <Link href="/projects">
            <Typography
              variant="text-light"
              clickable
              className="flex items-center justify-end gap-1"
            >
              <RiArrowLeftLine></RiArrowLeftLine>
              Back to all projects
            </Typography>
          </Link>
          <Typography variant="title">{foundProject?.title}</Typography>
          <motion.div
            className="whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            <Typography variant="text">
              {`${
                foundProject?.technologies
                  ?.toUpperCase()
                  .replace(/ /g, "\u00A0 \u00A0 \u00A0") ??
                "no technologies specified"
              }\u00A0 \u00A0 \u00A0`.repeat(10)}
            </Typography>
          </motion.div>
          <Typography variant="text">
            {foundProject?.content ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </Typography>
          <Typography variant="heading">{foundProject?.date}</Typography>
          <div className="flex items-center justify-end gap-2">
            {(foundProject?.link1 && (
              <Link target="_blank" href={foundProject.link1}>
                <Typography variant="text" clickable className="flex">
                  Live
                  <RiArrowRightUpLine className="text-sm" />
                </Typography>
              </Link>
            )) ?? (
              <Typography variant="text">
                Live demo not available yet
              </Typography>
            )}
            <span>•</span>
            {(foundProject?.link2 && (
              <Link target="_blank" href={foundProject.link2}>
                <Typography variant="text" clickable className="flex">
                  Code
                  <RiArrowRightUpLine className="text-sm" />
                </Typography>
              </Link>
            )) ??
              "n/a"}
          </div>
        </div>
      </MotionChild>
    </MotionParent>
  );
};

export default Project;
