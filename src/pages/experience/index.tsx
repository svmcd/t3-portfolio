import { useState, useEffect } from "react";
import { type NextPage } from "next";
import { MotionParent, MotionChild } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";
import { experiences } from "@component/data/experiences";

const ExperiencesPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    const skeletonExperiences = Array.from({ length: 8 }, (_, index) => (
      <div key={index}>
        <Typography variant="title" className="loading">
          This is a Experience Title
        </Typography>
        <Typography variant="text" className="loading">
          mei 2004
        </Typography>
      </div>
    ));

    return (
      <div className="scrollbar-hide fixed right-0 top-0 h-screen overflow-y-scroll py-[8.1rem] pr-[40px] sm:pr-[63px] xl:py-[10rem] 2xl:py-[12rem]">
        <div className="loading flex flex-col items-end gap-8  text-right">
          {skeletonExperiences}
        </div>
      </div>
    );
  }

  if (!experiences) {
    return <h1>no data</h1>;
  }
  return (
    <div className="scrollbar-hide flex h-full items-end overflow-y-scroll sm:fixed sm:right-0 sm:top-0 sm:h-screen sm:items-start sm:py-[8.1rem] sm:pr-[63px] xl:py-[10rem] 2xl:py-[12rem]">
      <MotionParent>
        <div className="flex flex-col items-end gap-8 text-right">
          {experiences.map((experience, index) => (
            <MotionChild key={index}>
              <Link
                href={`/experience/${experience.id}`}
                className=" duration-300 hover:opacity-40"
              >
                <Typography variant="title" className="mix-blend-difference">
                  {experience.title}
                  <span className="mx-1 opacity-50">{experience.type}</span>
                </Typography>
                <Typography variant="text">{experience.date}</Typography>
              </Link>
            </MotionChild>
          ))}
        </div>
      </MotionParent>
    </div>
  );
};

export default ExperiencesPage;
