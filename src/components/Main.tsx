import type { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { CustomCursor } from "@component/components/CustomCursor";
import { useTheme } from "next-themes";
import { Header } from "@component/components/Header";
import Sphere from "@component/components/Sphere";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Samed Polat</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex h-screen w-screen items-center justify-center p-8">
        <Sphere />
        <div className="solid relative grid h-full w-full grid-cols-2 border border-stone-800 p-4 dark:border-stone-300">
          <CustomCursor />
          <section className="">
            <Header theme={theme} />
          </section>
          <section className="">{children}</section>
        </div>
      </main>
    </>
  );
};
