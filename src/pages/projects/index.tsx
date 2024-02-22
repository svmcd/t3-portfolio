import { type NextPage } from "next";
import Link from "next/link";
import { api, type RouterOutputs } from "@component/utils/api";
import { Typography } from "@component/components/Typography";
import { MotionChild, MotionParent } from "@component/components/Motion";
import { projects } from "@component/data/projects";
import { useEffect, useState } from "react";

const ProjectsPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    const skeletonProjects = Array.from({ length: 8 }, (_, index) => (
      <div key={index}>
        <Typography variant="title" className="loading">
          This is a Project Title
        </Typography>
        <Typography variant="text" className="loading">
          mei 2004
        </Typography>
      </div>
    ));

    return (
      <div className="scrollbar-hide fixed right-0 top-0 h-screen overflow-y-scroll py-[8.1rem] pr-[40px] sm:pr-[63px] xl:py-[10rem] 2xl:py-[12rem]">
        <div className="loading flex flex-col items-end gap-8  text-right">
          {skeletonProjects}
        </div>
      </div>
    );
  }

  if (!projects) {
    return <h1>no data</h1>;
  }

  return (
    <div className="scrollbar-hide fixed right-0 top-0 h-screen overflow-y-scroll py-[8.1rem] pr-[40px] sm:pr-[63px] xl:py-[10rem] 2xl:py-[12rem]">
      <MotionParent>
        <div className="flex flex-col items-end gap-8 text-right">
          {projects?.map((project) => (
            <>
              <MotionChild>
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="bg-blend-screen duration-300 hover:opacity-40"
                >
                  <Typography variant="title">{project.title}</Typography>
                  <Typography variant="text">{project.date}</Typography>
                </Link>
              </MotionChild>
            </>
          ))}
        </div>
      </MotionParent>
    </div>
  );
};

export default ProjectsPage;
