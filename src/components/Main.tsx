import type { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { CustomCursor } from "@component/components/CustomCursor";
import { useTheme } from "next-themes";
import { Header } from "@component/components/Header";
import { Blob } from "@component/components/Blob";
import { Frame } from "@component/components/Frame";
import { Sidebar } from "@component/components/Sidebar";
import { ThemeToggle } from "@component/components/ThemeToggle";
import { Canvas } from "@react-three/fiber";
import { PreLoader } from "./PreLoader";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Samed Polat</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex h-[calc(100dvh)] w-screen items-center justify-center overflow-hidden">
        <Frame />
        <ThemeToggle />
        {/* <CustomCursor /> */}
        <Canvas
          className="pointer-events-none absolute inset-0 z-20"
          camera={{ position: [0.0, 0.0, 5.0] }}
        >
          <Blob />
        </Canvas>
        <div className="solid absolute top-6 bottom-6 left-6 right-6 z-20 grid grid-cols-2 grid-rows-6 border border-stone-600 p-[15px] transition-colors duration-500 ease-linear dark:border-stone-400  dark:text-stone-200 sm:p-[30px] md:bottom-8 md:right-8 md:left-8 md:top-8 ">
          <PreLoader />
          <section className="col-span-2 row-span-1">
            <Header />
          </section>
          <section className="z-10 row-span-5">
            <Sidebar />
          </section>
          <section className="row-span-5 flex justify-end text-right">
            {/* <div className="scrollbar-hide fixed right-0 top-0 h-screen overflow-y-scroll py-[170px] pr-[63px]"> */}
            {children}
            {/* </div> */}
          </section>
        </div>
      </main>
    </>
  );
};
