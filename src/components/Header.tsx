import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../assets/cheshire-1.png";
import logo2 from "../assets/cheshire-2.png";
import Button from "./Button";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  const containerClasses = `
    flex 
    h-full 
    justify-between 
    items-center 
    px-4 
    py-2 
    bg-transparent
    hover:bg-white 
    transition-colors 
    duration-300 
    ${className}
  `;

  return (
    <div className={containerClasses}>
      <button className="flex items-center h-full gap-1 px-2 pr-3 font-logo border-0 bg-transparent shadow-none hover:bg-grey hover:rounded-full group">
        <>
          <img
            className="h-12 group-hover:hidden"
            src={logo1}
            alt="Cheshire Logo"
          />
          <img
            className="h-12 hidden group-hover:block"
            src={logo2}
            alt="Cheshire Logo"
          />
          <p>Cheshire</p>
        </>
      </button>
      <div className="flex gap-3 items-center">
        <Button className="px-4 py-2">Start for Free</Button>
        <Button className="hidden bg-transparent px-4 py-2 md:block">
          Log In
        </Button>
        <FontAwesomeIcon
          icon="bars"
          className="text-2xl rounded-md p-2  hover:bg-grey cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
