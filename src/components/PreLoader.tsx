import { useState, useEffect } from "react";
import { Typography } from "./Typography";

export const PreLoader = () => {
  const [preLoaderClass, setPreLoaderClass] = useState("opacity-100");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreLoaderClass("opacity-0");
      setTimeout(() => {
        setPreLoaderClass("hidden");
      }, 500);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`absolute inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-stone-200 transition-opacity duration-700 dark:bg-dark ${preLoaderClass}`}
      >
        <Typography variant="title">Samed Polat</Typography>
        <Typography variant="text">( still under development )</Typography>
      </div>
    </>
  );
};
