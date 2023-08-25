import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { useRouter } from "next/router";
import { IoTriangleSharp } from "react-icons/io5";
import { IoSquareSharp } from "react-icons/io5";

export const Triangle = () => {
  return <IoTriangleSharp className="rotate-90 text-[.5rem]" />;
};

export const Square = () => {
  return <IoSquareSharp className="text-[.5rem]" />;
};

const initialClassName = "flex items-center gap-2 z-50";

const activeClassName = "flex items-center gap-4 opacity-40 z-50";

export const Sidebar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className=" flex flex-col items-start gap-2 bg-blend-overlay ">
      <Link href="/">
        <Typography
          variant="text"
          clickable
          className={
            router.pathname == "/" ? activeClassName : initialClassName
          }
        >
          {router.pathname == "/" ? (
            <>
              <Triangle />
              {"Home"}
            </>
          ) : (
            <>
              <Square />
              {"Home"}
            </>
          )}
        </Typography>
      </Link>
      <Link href="/projects">
        <Typography
          variant="text"
          clickable
          className={
            router.pathname.includes("/projects")
              ? activeClassName
              : initialClassName
          }
        >
          {router.pathname.includes("/projects") ? (
            <>
              <Triangle />
              {"Projects"}
            </>
          ) : (
            <>
              <Square />
              {"Projects"}
            </>
          )}
        </Typography>
      </Link>
      <Link href="/experience">
        <Typography
          variant="text"
          clickable
          className={
            router.pathname == "/experience"
              ? activeClassName
              : initialClassName
          }
        >
          {router.pathname == "/experience" ? (
            <>
              <Triangle />
              {"Experience"}
            </>
          ) : (
            <>
              <Square />
              {"Experience"}
            </>
          )}
        </Typography>
      </Link>
      <Link href="/contact">
        <Typography
          variant="text"
          clickable
          className={
            router.pathname == "/contact" ? activeClassName : initialClassName
          }
        >
          {router.pathname == "/contact" ? (
            <>
              <Triangle />
              {"Contact"}
            </>
          ) : (
            <>
              <Square />
              {"Contact"}
            </>
          )}
        </Typography>
      </Link>
      {sessionData ? (
        <Link href="/createProject">
          <Typography
            variant="text"
            clickable
            className={
              router.pathname == "/createProject"
                ? activeClassName
                : initialClassName
            }
          >
            {router.pathname == "/createProject" ? (
              <>
                <Triangle />
                {"Create Project"}
              </>
            ) : (
              <>
                <Square />
                {"Create Project"}
              </>
            )}
          </Typography>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
