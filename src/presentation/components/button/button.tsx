import { ReactNode } from "react";
import {} from "../../../utils/functions";

interface CTProps {
  children: ReactNode;
  className?: string;
  click: () => void;
}

export function Button({ click, children, className }: CTProps) {
  return (
    <button
      onClick={click}
      className={` bg-primary click text-white py-2 px-4 rounded-md ${className} `}
    >
      {children}
    </button>
  );
}
