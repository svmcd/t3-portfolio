import { type AppType } from "next/app";

import "@component/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Main } from "@component/components/Main";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
};

export default MyApp;
