import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";

const Temp = () => {
  const { data: sessionData } = useSession();
  return (
    <div className="absolute left-0 bottom-10">
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      <Link href="/projects">
        <Typography variant="heading">View project</Typography>
      </Link>
      <Link href="/createProject">
        <Typography variant="heading">Create project</Typography>
      </Link>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-full flex-col items-end justify-end"></div>
      <Temp />
    </>
  );
};

export default Home;
