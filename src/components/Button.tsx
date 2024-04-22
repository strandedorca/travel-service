import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: string;
  className?: string;
}

function Button({ children, className }: ButtonProps) {
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
    w-fit 
    bg-amber
    ${
      isHovered
        ? "animate-[bounce-in_0.4s_ease-in-out_forwards]"
        : "animate-[bounce-out_0.4s_ease-in-out_forwards]"
    }
    ${className}
  `);
  return (
    <div className="h-12 flex justify-center items-center">
      <button
        className={classes}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
