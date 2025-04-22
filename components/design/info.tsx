import React from "react";

export default function Info() {
  const item = [
    {
      image: "/Card.png",
      title: "Benchmarks",
      content:
        "See how you stock up against comparable companies in similar stages.",
    },
    {
      image: "/Calculator.png",
      title: "Pricing Audit",
      content:
        "Benchmark the health of your monetization and pricing strategy.",
    },
    {
      image: "/Camera.png",
      title: "Retention Audit",
      content:
        "Audit where revenue leakage exists and where you can increase retention.",
    },
  ];
  return (
    <section className="mt-20 flex flex-col md:flex-row items-center md:items-start justify-between max-w-[1070px] min-h-[208px] h-auto">
      {item.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-[307px] h-[208px] gap-y-[8px]"
        >
          <div className="mx-auto flex flex-col gap-y-[7px] h-auto">
            <img
              src={item.image}
              alt="image"
              className="w-[151px] h-[97px] opacity-100"
            />
            <p className="h-[36px] font-bold text-[28px] md:text-[24px] text-[#19191B] leading-[24px] lg:leading-[36px] tracking-[-0.75px]">
              {item.title}
            </p>
          </div>

          <p className="w-[307px] h-auto lg:min-h-[48px] mulish font-normal  md:text-[1rem] text-center leading-[18px]  lg:leading-[24px] tracking-[-0.5px] text-[#696971]/100">
            {item.content}
          </p>
        </div>
      ))}
    </section>
  );
}
