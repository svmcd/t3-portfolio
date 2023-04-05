import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = ({ theme }: Record<string, unknown>) => {
  const [logoClass, setLogoClass] = useState("");

  useEffect(() => {
    const newLogoClass =
      theme === "light" ? "mix-blend-multiply invert" : "mix-blend-screen";
    setLogoClass(newLogoClass);
  }, [theme]);

  return (
    <>
      <div className="pointer-events-none select-none">
        <Image
          src="/logo.gif"
          alt="gif"
          height={200}
          width={200}
          unoptimized={true}
          className={logoClass}
        />
        <p>Developer & Designer</p>
      </div>
    </>
  );
};
