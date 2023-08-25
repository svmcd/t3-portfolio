import { type NextPage } from "next";
import { Motion } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";

const Experience: NextPage = () => {
  return (
    <div className="scrollbar-hide fixed right-0 top-0 flex h-screen items-end overflow-y-scroll py-[3rem] pr-[40px] sm:py-[8.1rem] sm:pr-[63px] md:items-start xl:py-[10rem] 2xl:py-[12rem]">
      <Motion>
        <div className="flex flex-col items-end gap-8 text-right">
          <Link href={`/`} className=" duration-300 hover:opacity-40">
            <Typography variant="title" className="mix-blend-difference">
              Mediacollege A&apos;DAM
              <span className="opacity-50"> Education</span>
            </Typography>
            <Typography variant="text">September 2020 - July 2024</Typography>
          </Link>
          <Link href={`/`} className=" duration-300 hover:opacity-40">
            <Typography variant="title">
              CanvasHeroes <span className="opacity-50">Internship</span>
            </Typography>
            <Typography variant="text">
              September 2023 - February 2024
            </Typography>
          </Link>
          <Link href={`/`} className=" duration-300 hover:opacity-40">
            <Typography variant="title">
              INFO <span className="opacity-50">Internship</span>
            </Typography>
            <Typography variant="text">February 2023 - July 2023</Typography>
          </Link>
        </div>
      </Motion>
    </div>
  );
};

export default Experience;
