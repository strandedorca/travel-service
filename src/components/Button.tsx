import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className, onClick }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const classes = twMerge(`
    text-sm 
    px-6 
    py-3 
    border-midnight 
    border-2 
    rounded-full 
    bg-amber 
    ${
      isHovered
        ? "animate-[bounce-in_0.4s_ease-in-out_forwards]"
        : "animate-[bounce-out_0.4s_ease-in-out_forwards]"
    }
    active:animate-[bounce-out_0.4s_ease-in-out_forwards] 
    ${className}
  `);
  return (
    <button
      className={classes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
