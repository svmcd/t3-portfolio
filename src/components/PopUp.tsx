import { useState, useEffect } from "react";
import { Typography } from "./Typography";
import { motion } from "framer-motion";

export const PopUp = () => {
  const [popUpStatus, setPopUpStatus] = useState(true);

  return (
    <>
      <dialog
        open={popUpStatus}
        className="w-fullsm:w-4/5 z-30 box-border h-40 bg-amber-500 dark:bg-amber-300 md:w-2/3"
      >
        <button
          className="cursor-pointer"
          onClick={() => setPopUpStatus(false)}
        >
          x
        </button>
      </dialog>
    </>
  );
};
