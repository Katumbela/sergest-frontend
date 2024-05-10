import { ReactNode } from "react";

interface CTProps {
  children: ReactNode;
  className?: string;
}

export function ButtonSecondary({ children, className }: CTProps) {
  return <button className={` bg-secondary hover:shadow-md text-white py-3 px-5 rounded-md ${className} active:scale-95 transition-all`}>{children}</button>;
}
