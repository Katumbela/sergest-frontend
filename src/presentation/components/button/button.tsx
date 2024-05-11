import { ReactNode } from "react";
import {} from "../../../utils/functions";

interface CTProps {
  children: ReactNode;
  className?: string;
  click?: () => void;
}

export function Button({ click, children, className }: CTProps) {
  return (
    <button
      onClick={click}
      className={` bg-primary click sm:text-md text-sm  text-white py-2 sm:py-2 px-3 sm:px-4 rounded-md ${className} `}
    >
      {children}
    </button>
  );
}
