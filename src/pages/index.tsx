import { type NextPage } from "next";
import { MotionParent, MotionChild } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";

const Home: NextPage = () => {
  return (
    <>
      <MotionParent>
        <div className="flex w-full justify-end ">
          <div className="w-full md:w-1/2">
            <MotionChild>
              <Typography variant="text">
                I am Samed Polat, a web developer based in Zaandam. My journey
                into the world of web development began with my passion for
                graphic design. I love the process of both designing and
                developing websites, as it allows me to express my creativity
                while constantly learning new things.
              </Typography>
            </MotionChild>
          </div>
        </div>
      </MotionParent>
    </>
  );
};

export default Home;
