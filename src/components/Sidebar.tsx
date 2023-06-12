import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { useRouter } from "next/router";
import { IoTriangleSharp } from "react-icons/io5";

export const Square = () => {
  return <IoTriangleSharp className="rotate-90 text-[.5rem]" />;
};

const activeClassName = "mx-2 flex items-center gap-2 opacity-40";

export const Sidebar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="/">
        <Typography
          variant="text"
          clickable
          className={router.pathname == "/" ? activeClassName : ""}
        >
          {router.pathname == "/" ? (
            <>
              <Square />
              {"Home"}
            </>
          ) : (
            "Home"
          )}
        </Typography>
      </Link>
      <Link href="/projects">
        <Typography
          variant="text"
          clickable
          className={router.pathname == "/projects" ? activeClassName : ""}
        >
          {router.pathname == "/projects" ? (
            <>
              <Square />
              {"Projects"}
            </>
          ) : (
            "Projects"
          )}
        </Typography>
      </Link>
      <Link href="/experience">
        <Typography
          variant="text"
          clickable
          className={router.pathname == "/experience" ? activeClassName : ""}
        >
          {router.pathname == "/experience" ? (
            <>
              <Square />
              {"Experience"}
            </>
          ) : (
            "Experience"
          )}
        </Typography>
      </Link>
      <Link href="/contact">
        <Typography
          variant="text"
          clickable
          className={router.pathname == "/contact" ? activeClassName : ""}
        >
          {router.pathname == "/contact" ? (
            <>
              <Square />
              {"Contact"}
            </>
          ) : (
            "Contact"
          )}
        </Typography>
      </Link>
      {sessionData ? (
        <Link href="/createProject">
          <Typography
            variant="text"
            clickable
            className={
              router.pathname == "/createProject" ? activeClassName : ""
            }
          >
            {router.pathname == "/createProject" ? (
              <>
                <Square />
                {"Create Project"}
              </>
            ) : (
              "Create Project"
            )}
          </Typography>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
