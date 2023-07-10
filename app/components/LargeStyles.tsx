import clsx from "clsx";

export function AnimateUnderline(className?: string) {
  return clsx(
    "inline-block relative after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:origin-bottom-right after:transition after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left",
    className
  );
}
