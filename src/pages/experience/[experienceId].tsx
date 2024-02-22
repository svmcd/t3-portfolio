import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "@component/utils/api";
import { MotionParent, MotionChild } from "@component/components/Motion";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { motion } from "framer-motion";
import { RiArrowRightUpLine, RiArrowLeftLine } from "react-icons/ri";
import { experiences } from "@component/data/experiences";

const Experience = () => {
  const router = useRouter();

  const foundExperience = experiences?.find(
    (p) => p.id === router.query.experienceId
  );

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
          key={foundExperience?.id}
          className="flex max-w-[12rem] flex-col gap-2 overflow-x-hidden sm:max-w-xs"
        >
          <Link href="/experience">
            <Typography
              variant="text-light"
              clickable
              className="flex items-center justify-end gap-1"
            >
              <RiArrowLeftLine />
              Back to all experiences
            </Typography>
          </Link>
          <Typography variant="title">{foundExperience?.title}</Typography>
          <motion.div
            className="whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
          >
            <Typography variant="text">
              {`${
                foundExperience?.technologies !==
                  ""?.toUpperCase().replace(/ /g, "\u00A0 \u00A0 \u00A0") ??
                "no technologies specified"
              }\u00A0 \u00A0 \u00A0`.repeat(10)}
            </Typography>
          </motion.div>
          <Typography variant="text">
            {foundExperience?.content ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </Typography>
          <Typography variant="heading">{foundExperience?.date}</Typography>
        </div>
      </MotionChild>
    </MotionParent>
  );
};

export default Experience;
