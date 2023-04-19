import { useTheme } from "next-themes";
import { Typography } from "@component/components/Typography";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute bottom-1 left-8 z-40 flex gap-3">
      <button
        onClick={() => setTheme("light")}
        className="flex flex-row items-center gap-[2px]"
      >
        <div className="solid h-[10px] w-[10px] border-[1px] border-black bg-black  dark:border-white dark:bg-transparent" />
        <Typography variant="text">LIGHT</Typography>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="flex flex-row items-center gap-[2px]"
      >
        <div className="solid h-[10px] w-[10px] border-[1px] border-black dark:border-white dark:bg-white" />
        <Typography variant="text">DARK</Typography>
      </button>
    </div>
  );
};
