import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from "../assets/cheshire-1.png";
import Button from "./Button";
// import logo2 from "../assets/cheshire-2.png";

function Header() {
  return (
    <div className="flex h-full justify-between items-center px-4">
      <button className="flex items-center h-full p-1 font-logo">
        <img className="h-full" src={logo1} alt="Cheshire Logo" />
        <p>Cheshire</p>
      </button>
      <div className="flex gap-3 items-center">
        <Button className="bg-transparent border-0 p-2 animate-none">
          Pricing
        </Button>
        <Button className="hidden">Log In</Button>
        <FontAwesomeIcon icon="bars" className="text-2xl" />
      </div>
    </div>
  );
}

export default Header;
