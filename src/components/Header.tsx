import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Typography } from "@component/components/Typography";

export const Header = () => {
  const { data: sessionData } = useSession();
  const [signInButtonClass, setSignInButtonClass] = useState("hidden");
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 8) {
      setSignInButtonClass("absolute bottom-0 left-0");
    }
    if (clickCount > 8) {
      setSignInButtonClass("hidden");
    }
  };

  return (
    <>
      <div
        className="flex h-full select-none flex-col"
        onClick={handleImageClick}
      >
        <Typography variant="title-big">Samed Polat</Typography>
        <Typography variant="text-light">Developer & Designer</Typography>
        <div
          onClick={() => (sessionData ? void signOut() : void signIn())}
          className={signInButtonClass}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </div>
      </div>
    </>
  );
};
