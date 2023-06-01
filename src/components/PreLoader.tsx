import { useState, useEffect } from "react";
import { Typography } from "./Typography";

export const PreLoader = () => {
  const [preLoaderClass, setPreLoaderClass] = useState("opacity-100");

  useEffect(() => {
    setTimeout(() => {
      setPreLoaderClass("opacity-0");
      setTimeout(() => {
        setPreLoaderClass("hidden");
      }, 2100);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`absolute inset-0 z-40 flex items-center justify-center bg-stone-200 transition-opacity duration-1000 dark:bg-dark ${preLoaderClass}`}
      >
        <Typography variant="title">Samed Polat</Typography>
      </div>
    </>
  );
};
