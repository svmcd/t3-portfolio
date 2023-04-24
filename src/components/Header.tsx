import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Typography } from "@component/components/Typography";

export const Header = ({ theme }: Record<string, unknown>) => {
  const { data: sessionData } = useSession();
  const [logoClass, setLogoClass] = useState("");
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const newLogoClass =
      theme === "light"
        ? "mix-blend-multiply invert h-full"
        : "mix-blend-screen h-full";
    setLogoClass(newLogoClass);
  }, [theme]);

  const handleImageClick = async () => {
    setClickCount(clickCount + 1);
    if (clickCount === 2) {
      setClickCount(0);
      try {
        sessionData ? await signOut() : await signIn();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex h-full select-none flex-col">
        <Typography variant="title-big">Samed Polat</Typography>
        <Typography variant="text-light">Developer & Designer</Typography>
      </div>
    </>
  );
};
