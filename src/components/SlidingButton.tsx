import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface SlidingButtonProps {
  children: ReactNode;
  className?: string;
}

function SlidingButton({ children, className }: SlidingButtonProps) {
  const classes = twMerge(`
    flex
    gap-3
    items-center
    group
  ${className}
    `);
  return (
    <button className={classes}>
      {children}
      <FontAwesomeIcon
        icon="arrow-right"
        className="bg-amber p-2 rounded-full w-4 h-4 group-hover:animate-[bounce-horizontally_0.3s_ease-in-out_alternate_infinite]"
      />
    </button>
  );
}

export default SlidingButton;
