import { type NextPage } from "next";
import { MotionParent, MotionChild } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";
import { experiences } from "@component/data/experiences";

const ExperiencesPage: NextPage = () => {
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
