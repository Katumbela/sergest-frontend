import { ReactNode } from "react";

interface CTProps {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className }: CTProps) {
  return <button className={` bg-primary text-white py-2 px-4 rounded-md ${className} `}>{children}</button>;
}
