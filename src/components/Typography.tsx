import type { FC } from "react";

interface TypographyProps {
  variant: "title-big" | "title" | "heading" | "text" | "text-light";
  clickable?: boolean;
  bold?: boolean;
  children: React.ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  clickable,
  bold,
  children,
}) => {
  let className = "";
  let hoverClassName = "";
  let fontWeight = "";
  switch (variant) {
    case "title-big":
      className = className =
        "f-light text-3xl  sm:text-5xl text-stone-900 dark:text-stone-300";
      break;
    case "title":
      className = className =
        "f-light text-2xl  sm:text-4xl text-stone-900 dark:text-stone-300";
      break;
    case "heading":
      className = "f-light text-lg text-stone-900 dark:text-stone-300";
      break;
    case "text":
      className =
        "text-xs sm:text-sm f-bold text-stone-900 dark:text-stone-300";
      break;
    case "text-light":
      className = "text-sm f-light text-stone-900 dark:text-stone-300";
      break;
    default:
      className = "text-sm text-stone-900 dark:text-stone-300";
  }
  if (clickable) {
    hoverClassName = "hover:opacity-40 duration-300";
  }
  if (bold) {
    fontWeight = "font-[500]";
  }
  return (
    <div className={`${className} ${fontWeight} ${hoverClassName}`}>
      {children}
    </div>
  );
};
