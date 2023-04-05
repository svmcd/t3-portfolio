import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex h-full flex-col items-end justify-end">
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
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
