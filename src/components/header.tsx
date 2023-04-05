import Image from "next/image";
import { useEffect, useState } from "react";

const Header = ({ theme }: Record<string, unknown>) => {
  const [logoClass, setLogoClass] = useState("");

  useEffect(() => {
    const newLogoClass =
      theme === "light" ? "mix-blend-multiply invert" : "mix-blend-screen";
    setLogoClass(newLogoClass);
  }, [theme]);

  return (
    <>
      <div className="pointer-events-none absolute top-0 left-0 h-20	select-none">
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

export default Header;
