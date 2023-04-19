import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="flex h-full flex-col items-end justify-end">
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
    </>
  );
};

export default Home;
