import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx(className, "mx-auto max-w-7xl sm:px-6 lg:px-8")}>
      {children}
    </div>
  );
}
