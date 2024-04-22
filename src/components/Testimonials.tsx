import React from "react";

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
    <div className="bg-midnight text-white px-14 py-16 flex gap-5 flex-col">
      <h3 className="font-title text-4xl">
        Find out why we’re the ultimate virtual assistant service provider.
      </h3>
      <p>
        The #1 virtual assistant service provider that delivers unparalleled
        results for individuals and businesses seeking efficient support.
      </p>
      {list.map((item) => {
        return (
          <div className="my-3 px-10">
            <h4 className="text-xl font-semibold mb-1">{item.first}</h4>
            <p>{item.second}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Testimonials;
