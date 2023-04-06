import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute bottom-0">
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
