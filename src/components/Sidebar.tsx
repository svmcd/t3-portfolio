import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";

export const Sidebar = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="/">
        <Typography variant="text" clickable>
          Home
        </Typography>
      </Link>
      <Link href="/projects">
        <Typography variant="text" clickable>
          View projects
        </Typography>
      </Link>
      <Link href="/experience">
        <Typography variant="text" clickable>
          Experience
        </Typography>
      </Link>
      <Link href="/contact">
        <Typography variant="text" clickable>
          Contact
        </Typography>
      </Link>
      {sessionData ? (
        <Link href="/createProject">
          <Typography variant="text" clickable>
            Create project
          </Typography>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
