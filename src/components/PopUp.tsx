import { useState, useEffect } from "react";
import { Typography } from "./Typography";
import { motion } from "framer-motion";

export const PopUp = () => {
  const [popUpStatus, setPopUpStatus] = useState(true);

  useEffect(() => {
    console.log(popUpStatus);
  }, [popUpStatus]);

  return (
    <>
      <div className="absolute inset-0 flex justify-center">
        <div className="z-30 h-40 w-full bg-amber-500 dark:bg-amber-300 sm:w-4/5">
          <button
            className="cursor-pointer"
            onClick={() => setPopUpStatus(false)}
          >
            x
          </button>
        </div>
      </div>
    </>
  );
};
