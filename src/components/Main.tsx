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
        npm install three @types/three @react-three/fiber
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
        {/* <canvas className="absolute inset-0 z-20 h-full w-full animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25" /> */}
        <Frame />
        <ThemeToggle />
        {/* <CustomCursor /> */}
        <Canvas
          className="pointer-events-none absolute inset-0 z-20 "
          camera={{ position: [0.0, 0.0, 5.0] }}
        >
          <Blob />
        </Canvas>
        <div className="solid absolute bottom-8 right-8 left-8 top-8 z-20 grid grid-cols-2 grid-rows-6 border border-stone-600  p-[30px] transition-colors duration-500 ease-linear dark:border-stone-400 dark:text-stone-200 ">
          <PreLoader />
          {/* <div className="solid absolute bottom-8 right-8 left-8 top-8 z-20 grid grid-cols-2 grid-rows-6 border border-stone-800 bg-stone-200 p-[20px] transition-colors duration-500 ease-linear dark:border-stone-400 dark:bg-dark dark:text-stone-200 "> */}
          <section className="col-span-2 row-span-1 ">
            <Header />
          </section>
          <section className="row-span-5 ">
            <Sidebar />
          </section>
          <section className="row-span-5  ">
            <div className="scrollbar-hide fixed right-0 top-0  h-screen overflow-y-scroll py-[170px] pr-[63px]">
              {children}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
