import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typography } from "@component/components/Typography";

export const Header = ({ theme }: Record<string, unknown>) => {
  const { data: sessionData } = useSession();
  const [logoClass, setLogoClass] = useState("");
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const newLogoClass =
      theme === "light" ? "mix-blend-multiply invert" : "mix-blend-screen";
    setLogoClass(newLogoClass);
  }, [theme]);

  const handleImageClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 2) {
      setClickCount(0);
      console.log("hello");
      sessionData ? signOut() : signIn();
    }
  };

  return (
    <>
      <div className=" select-none">
        <Image
          src="/logo.gif"
          alt="gif"
          height={200}
          width={200}
          className={logoClass}
          onClick={handleImageClick}
        />
        <Typography variant="heading">Developer & Designer</Typography>
      </div>
    </>
  );
};
