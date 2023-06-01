import { useState, useEffect } from "react";
import { Typography } from "./Typography";
import { motion } from "framer-motion";

export const PreLoader = () => {
  const [preLoaderClass, setPreLoaderClass] = useState(
    "absolute inset-0 bg-red-500 z-40"
  );

  useEffect(() => {
    const removePreLoader = () => {
      setPreLoaderClass("hidden");
    };

    setTimeout(removePreLoader, 2000);
  }, []);

  return (
    <>
      <div className={preLoaderClass}>hi</div>
    </>
  );
};
