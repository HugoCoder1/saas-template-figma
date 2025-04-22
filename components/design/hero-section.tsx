import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row gap-[50px] md:gap-[2px] lg:gap-[77px] lg:h-[644px] mt-10 md:mt-12 lg:mt-32 px-4 md:px-6 lg:px-0">
      <div className="w-[459px] lg:max-h-[461px] lg:my-auto flex flex-col gap-y-[20px] md:gap-y-[55px] lg:gap-y-[30px]">
        <h1 className="w-[462px] md lg:h-[231px] font-bold text-[35px] md:text-[42px] lg:text-[80px] text-[#19191B] tracking-[-2.5px] leading-[40px] lg:leading-[77px] text-wrap">
          Grow your subscription business
        </h1>
        <p className="lg:h-[90px] font-normal leading-[20px] lg:leading-[30px] tracking-[-0.63px] text-[15.4px] md:text-[18px] lg:text-[20px] mulish text-[#696871] text-wrap">
          Outcome-centered products that reduce churn, optimize pricing, and
          grow your subscription business end-to-end.
        </p>
        <div className="flex gap-x-[32px]">
          <Button className="shadow-none text-white w-[211px] text-center h-[60px] bg-[#5454D4] opacity-100 text-[17px] font-bold tracking-[-0.53px]">
            <span className="w-[92px] h-[22px]">Get Started</span>
          </Button>
          <img src="/Down Arrow.png" alt="Down Arrow" className="size-[60px]" />
        </div>
      </div>
      <img
        src="/Hero 3D.png"
        alt="Hero 3D.png"
        className="w-[500px] h-[480px] md:h-[410px] lg:w-[580px] lg:h-[644px] bg-contain opacity-100"
      />
    </div>
  );
}
