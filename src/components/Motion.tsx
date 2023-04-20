import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

export const Motion: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <motion.div
        key={"poop"}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
