import type { FC } from "react";

interface TypographyProps {
  variant: "title" | "heading" | "text";
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
        "font-light text-4xl text-stone-900 dark:text-stone-300";
      break;
    case "heading":
      className = "font-light text-lg text-stone-900 dark:text-stone-300";
      break;
    case "text":
      className = "font-light text-stone-900 dark:text-stone-300";
      break;
    default:
      className = "font-light text-stone-900 dark:text-stone-300";
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
