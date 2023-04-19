import type { FC } from "react";

interface TypographyProps {
  variant: "title" | "heading" | "text";
  boldness?: boolean;
  children: React.ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  boldness,
  children,
}) => {
  let className = "";
  let fontWeight = "";
  switch (variant) {
    case "title":
      className = className = "font-light text-stone-900 dark:text-stone-300";
      break;
    case "heading":
      className =
        "font-light text-stone-900 dark:text-stone-300 hover:opacity-40 duration-300";
      break;
    case "text":
      className = "font-light text-stone-900 dark:text-stone-300";
      break;
    default:
      className = "font-light text-stone-900 dark:text-stone-300";
  }
  if (boldness) {
    fontWeight = "font-[500]";
  }
  return <div className={`${className} ${fontWeight}`}>{children}</div>;
};
