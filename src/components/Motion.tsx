import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

export const MotionParent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <motion.div
        variants={childrenContainerVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    </>
  );
};

export const MotionChild: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <motion.div variants={childrenVariants}>{children}</motion.div>
    </>
  );
};

const childrenContainerVariants = {
  inital: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.5,
    },
  },
};
