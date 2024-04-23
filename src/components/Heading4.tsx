import { twMerge } from "tailwind-merge";

interface Heading4Props {
  children: string;
  className?: string;
}

function Heading4({ children, className }: Heading4Props) {
  const classes = twMerge(`
    font-title 
    text-2xl 
    font-semibold 
    mb-1 
    ${className} 
    `);
  return <h4 className={classes}>{children}</h4>;
}

export default Heading4;
