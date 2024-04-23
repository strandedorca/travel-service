import { twMerge } from "tailwind-merge";

interface Heading3Props {
  children: string;
  className?: string;
}

function Heading3({ children, className }: Heading3Props) {
  const classes = twMerge(`
    font-title
    font-semibold 
    text-4xl
    ${className}
    `);
  return <h3 className={classes}>{children}</h3>;
}

export default Heading3;
