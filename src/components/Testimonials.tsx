import Heading3 from "./Heading3";

function Testimonials() {
  const list = [
    {
      first: "Over 95% of clients",
      second: "report seamless assistance.",
    },
    {
      first: "10+ years of experience",
      second: "providing professional virtual assistance.",
    },
    {
      first: "1M+ tasks completed",
      second: "by Virtuo Assist globally.",
    },
    {
      first: "$500 saved",
      second: "per client on average.",
    },
  ];
  return (
    <div className="bg-midnight text-white px-16 py-20 flex flex-col gap-10">
      <div>
        <Heading3>Find out why we’re best-in-class</Heading3>
        <p className="mt-5">
          The #1 virtual assistant service provider that delivers unparalleled
          results for individuals and businesses seeking efficient support.
        </p>
      </div>
      <div className="flex flex-wrap gap-7">
        {list.map((item) => {
          return (
            <div className="px-10" key={item.first}>
              <h4 className="text-lg font-semibold mb-1">{item.first}</h4>
              <p className="text-[.95em]">{item.second}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
