import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

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
        <Link href="/projects">View projects</Link>
        <Link href="/createProject">Create project</Link>
      </div>
    </>
  );
};

export default Home;
