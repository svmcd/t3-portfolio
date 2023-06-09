import { useTheme } from "next-themes";
import { Typography } from "@component/components/Typography";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute bottom-1 left-6 z-40 flex gap-3 sm:left-8 sm:bottom-3">
      <button
        onClick={() => setTheme("light")}
        className="flex flex-row items-center gap-[2px]"
      >
        <div className="solid h-[12px] w-[12px] border-[1px] border-black bg-stone-800  dark:border-stone-400 dark:bg-transparent" />
        <Typography variant="text-light">LIGHT</Typography>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="flex flex-row items-center gap-[2px]"
      >
        <div className="solid dark:stone-400 h-[12px] w-[12px] border-[1px] border-stone-500 dark:bg-stone-300" />
        <Typography variant="text-light">DARK</Typography>
      </button>
    </div>
  );
};
