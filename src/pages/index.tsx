import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Header from "@component/components/header";
import { CustomCursor } from "@component/components/customCursor";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Samed Polat</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomCursor />
      <Header theme={theme} />
      <main>
        <div>
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
        <div className="flex flex-col">
          <button
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
          <Link href="/projects">View projects</Link>
          <Link href="/createProject">Create project</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
