import Image from "next/image";

const Logo = ({ theme }: Record<string, unknown>) => {
  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 h-20	select-none">
        <Image
          src="/logo.gif"
          alt="gif"
          height={200}
          width={200}
          unoptimized={true}
          className={` ${
            theme === "light"
              ? " mix-blend-multiply invert"
              : "	mix-blend-screen"
          }`}
        />
        <p>Developer & Designer</p>
      </div>
    </>
  );
};

export default Logo;
