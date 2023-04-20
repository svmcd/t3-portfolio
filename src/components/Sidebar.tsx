import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";

export const Sidebar = () => {
  const { data: sessionData } = useSession();

  return (
    <div>
      <Link href="/">
        <Typography variant="heading">Home</Typography>
      </Link>
      <Link href="/projects">
        <Typography variant="heading">View projects</Typography>
      </Link>
      <Link href="/contact">
        <Typography variant="heading">Contact</Typography>
      </Link>
      <Link href="/createProject">
        <Typography variant="heading">Create project</Typography>
      </Link>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
