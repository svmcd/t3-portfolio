import { type NextPage } from "next";
import { Motion } from "@component/components/Motion";
import { Typography } from "@component/components/Typography";

const Home: NextPage = () => {
  return (
    <>
      <Motion>
        <div className="flex w-full justify-end ">
          <div className="w-full md:w-1/2">
            <Typography variant="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default Home;
