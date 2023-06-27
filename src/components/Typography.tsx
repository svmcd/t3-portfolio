import type { FC } from "react";

interface TypographyProps {
  variant: "title-big" | "title" | "heading" | "text" | "text-light";
  clickable?: boolean;
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  clickable,
  bold,
  className,
  children,
}) => {
  let baseClassName = "";
  let hoverClassName = "";
  let fontWeight = "";

  switch (variant) {
    case "title-big":
      baseClassName =
        "f-light text-3xl sm:text-5xl text-stone-900 dark:text-stone-300";
      break;
    case "title":
      baseClassName =
        "f-light text-2xl sm:text-4xl text-stone-900 dark:text-stone-300";
      break;
    case "heading":
      baseClassName = "f-light text-lg text-stone-900 dark:text-stone-300";
      break;
    case "text":
      baseClassName =
        "text-xs sm:text-sm f-bold text-stone-900 dark:text-stone-300";
      break;
    case "text-light":
      baseClassName =
        "text-[0.925rem] leading-5 f-light text-stone-900 dark:text-stone-300";
      break;
    default:
      baseClassName = "text-sm text-stone-900 dark:text-stone-300";
  }

  if (clickable) {
    hoverClassName = "hover:opacity-40 duration-300";
  }

  if (bold) {
    fontWeight = "font-[500]";
  }

  const combinedClassName = `${baseClassName} ${fontWeight} ${hoverClassName} ${
    className || ""
  }`;

  return <div className={combinedClassName}>{children}</div>;
};
