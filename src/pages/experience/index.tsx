import { type NextPage } from "next";
import { MotionParent, MotionChild } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";

const Experience: NextPage = () => {
  return (
    <div className="scrollbar-hide flex h-full items-end overflow-y-scroll sm:fixed sm:right-0 sm:top-0 sm:h-screen sm:items-start sm:py-[8.1rem] sm:pr-[63px] xl:py-[10rem] 2xl:py-[12rem]">
      <MotionParent>
        <div className="flex flex-col items-end gap-8 text-right">
          <MotionChild>
            <Link href={`/`} className=" duration-300 hover:opacity-40">
              <Typography variant="title" className="mix-blend-difference">
                Mediacollege A&apos;DAM
                <span className="opacity-50"> Education</span>
              </Typography>
              <Typography variant="text">September 2020 - July 2024</Typography>
            </Link>
          </MotionChild>
          <MotionChild>
            <Link href={`/`} className=" duration-300 hover:opacity-40">
              <Typography variant="title">
                CanvasHeroes <span className="opacity-50">Internship</span>
              </Typography>
              <Typography variant="text">
                September 2023 - February 2024
              </Typography>
            </Link>
          </MotionChild>
          <MotionChild>
            <Link href={`/`} className=" duration-300 hover:opacity-40">
              <Typography variant="title">
                INFO <span className="opacity-50">Internship</span>
              </Typography>
              <Typography variant="text">February 2023 - July 2023</Typography>
            </Link>
          </MotionChild>
        </div>
      </MotionParent>
    </div>
  );
};

export default Experience;
