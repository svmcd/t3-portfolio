import { type NextPage } from "next";
import { Motion } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";
import Link from "next/link";

const Experience: NextPage = () => {
  return (
    <div className="scrollbar-hide fixed right-0 top-0 h-screen overflow-y-scroll py-[11.5%] pr-[40px] sm:pr-[63px]">
      <Motion>
        <div className="flex flex-col items-end gap-8 text-right">
          <Link href={`/`} className=" duration-300 hover:opacity-40">
            <Typography variant="title" className="mix-blend-difference">
              Mediacollege Amsterdam
              <span className="opacity-50"> Education</span>
            </Typography>
            <Typography variant="text">september 2020 - july 2024</Typography>
          </Link>
          <Link href={`/`} className=" duration-300 hover:opacity-40">
            <Typography variant="title">
              INFO <span className="opacity-50">Internship</span>
            </Typography>
            <Typography variant="text">february 2023 - july 2023</Typography>
          </Link>
        </div>
      </Motion>
    </div>
  );
};

export default Experience;
