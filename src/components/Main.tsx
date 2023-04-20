import type { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { CustomCursor } from "@component/components/CustomCursor";
import { useTheme } from "next-themes";
import { Header } from "@component/components/Header";
import { Sphere } from "@component/components/Sphere";
import { Frame } from "@component/components/Frame";
import { Sidebar } from "@component/components/Sidebar";
import { ThemeToggle } from "@component/components/ThemeToggle";
import { Motion } from "@component/components/Motion";

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
        <Frame />
        <ThemeToggle />
        {/* <CustomCursor /> */}
        {/* <Sphere theme={theme} /> */}
        <div className="solid absolute bottom-8 right-8 left-8 top-8 z-[0] grid grid-cols-2 grid-rows-6 border border-stone-800  dark:border-stone-300">
          <section className="col-span-2 row-span-1">
            <Header theme={theme} />
          </section>
          <section className="row-span-5">
            <Sidebar />
          </section>
          <section className="row-span-5 ">
            <div className="scrollbar-hide fixed right-[33px] top-0 h-screen overflow-y-scroll py-48">
              {children}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
