import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="flex gap-x-[77px] h-[644px] mt-32">
      <div className="w-[459px] max-h-[461px] my-auto flex flex-col gap-y-[30px]">
        <h1 className="w-[462px] h-[231px] font-bold text-[80px] text-[#19191B] tracking-[-2.5px] leading-[77px]">
          Grow your subscription business
        </h1>
        <p className="h-[90px] font-normal leading-[30px] tracking-[-0.63px] text-[20px] mulish text-[#696871]">
          Outcome-centered products that reduce churn, optimize pricing, and grow
          your subscription business end-to-end.
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
        className="w-[580px] h-[644px] opacity-100"
      />
    </div>
  );
}
