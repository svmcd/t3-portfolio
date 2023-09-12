import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

export const MotionParent: FC<PropsWithChildren> = ({ children }) => {
  const childrenContainerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={childrenContainerVariants}
        initial="initial"
        whileInView="animate"
      >
        {children}
      </motion.div>
    </>
  );
};

export const MotionChild: FC<PropsWithChildren> = ({ children }) => {
  const childrenVariants = {
    initial: {
      opacity: 0,
      x: 750,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 0.75,
      },
    },
  };

  return (
    <>
      <motion.div variants={childrenVariants}>{children}</motion.div>
    </>
  );
};
