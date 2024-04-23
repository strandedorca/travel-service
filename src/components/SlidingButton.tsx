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
  ${className}
    `);
  return (
    <button className={classes}>
      {children}
      <FontAwesomeIcon icon="arrow-right" />
    </button>
  );
}

export default SlidingButton;
