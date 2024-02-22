import { useSession } from "next-auth/react";
import Link from "next/link";
import { Typography } from "@component/components/Typography";
import { MotionParent, MotionChild } from "./Motion";
import { useRouter } from "next/router";
import { IoTriangleSharp, IoSquareSharp } from "react-icons/io5";

interface MenuItemProps {
  path: string;
  label: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label, isActive }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <Typography
        variant="text"
        clickable
        className={`flex items-center ${
          isActive || (router.pathname === path && path === "/")
            ? "gap-4"
            : "gap-2"
        } z-50 ${
          isActive || (router.pathname === path && path === "/")
            ? "opacity-40"
            : ""
        }`}
      >
        {isActive || (router.pathname === path && path === "/") ? (
          <IoTriangleSharp className="rotate-90 text-[.5rem]" />
        ) : (
          <IoSquareSharp className="text-[.5rem]" />
        )}
        {label}
      </Typography>
    </Link>
  );
};

export const Sidebar = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  if (sessionData) {
    menuItems.push({ path: "/createProject", label: "Create Project" });
  }

  return (
    <MotionParent>
      <div className="flex flex-col items-start gap-2 bg-blend-overlay">
        {menuItems.map((item) => (
          <MenuItem
            key={item.path}
            path={item.path}
            label={item.label}
            isActive={router.pathname.includes(item.path) && item.path !== "/"}
          />
        ))}
      </div>
    </MotionParent>
  );
};
