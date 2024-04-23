import { MouseEvent } from "react";
function Notice() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <p className="text-center p-3 bg-sage text-white">
      {`Hey there! Free trials are available for Standard and Essentials plans. `}
      <a
        className="border-b-2  border-dashed hover:border-none"
        href=""
        onClick={handleClick}
      >
        Start for free today.
      </a>
    </p>
  );
}

export default Notice;
