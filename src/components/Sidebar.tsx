import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { useRouter } from "next/router";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Square = () => {
  return <FontAwesomeIcon icon={faPlay} className="text-[.5rem]" />;
};

export const Sidebar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="/">
        <Typography
          variant="text"
          clickable
          className={
            router.pathname == "/"
              ? "mx-2 flex items-center gap-1 opacity-40"
              : ""
          }
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
          className={
            router.pathname == "/projects"
              ? "mx-2 flex items-center gap-1 opacity-40"
              : ""
          }
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
          className={
            router.pathname == "/experience"
              ? "mx-2 flex items-center gap-1 opacity-40"
              : ""
          }
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
          className={
            router.pathname == "/contact"
              ? "mx-2 flex items-center gap-1 opacity-40"
              : ""
          }
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
              router.pathname == "/createProject"
                ? "mx-2 flex items-center gap-1"
                : ""
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
