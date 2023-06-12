import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import { api } from "@component/utils/api";

import "@component/styles/globals.css";

import { Main } from "@component/components/Main";
import { AnimatePresence } from "framer-motion";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait" initial={false}>
        <ThemeProvider attribute="class">
          <Main>
            <Component {...pageProps} />
          </Main>
        </ThemeProvider>
      </AnimatePresence>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
