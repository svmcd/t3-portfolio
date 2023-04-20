import { type NextPage } from "next";
import { Motion } from "@component/components/Motion";

const Home: NextPage = () => {
  return (
    <>
      <Motion>
        <div className="flex h-full flex-col items-end justify-end">hello</div>
      </Motion>
    </>
  );
};

export default Home;
