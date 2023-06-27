import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import { api } from "@component/utils/api";

import "@component/styles/globals.css";

import { Main } from "@component/components/Main";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Main>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </Main>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
