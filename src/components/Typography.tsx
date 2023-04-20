import type { FC } from "react";

interface TypographyProps {
  variant: "title" | "heading" | "text" | "light-text";
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
    case "title":
      className = className =
        "f-light text-4xl text-stone-900 dark:text-stone-300";
      break;
    case "heading":
      className = "f-light text-lg text-stone-900 dark:text-stone-300";
      break;
    case "text":
      className = "text-base f-bold text-stone-900 dark:text-stone-300";
      break;
    case "light-text":
      className = "text-base f-light text-stone-900 dark:text-stone-300";
      break;
    default:
      className = "text-base text-stone-900 dark:text-stone-300";
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
