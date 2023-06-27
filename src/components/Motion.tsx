import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

export const Motion: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.div>
    </>
  );
};
