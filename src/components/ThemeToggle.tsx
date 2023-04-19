import { useTheme } from "next-themes";
import { Typography } from "@component/components/Typography";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute bottom-0">
      <button onClick={() => setTheme("light")}>
        {" "}
        <Typography variant="heading">Light mode</Typography>
      </button>
      <button onClick={() => setTheme("dark")}>
        {" "}
        <Typography variant="heading">Dark mode</Typography>
      </button>
    </div>
  );
};
