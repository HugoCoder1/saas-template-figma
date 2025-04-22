import React from "react";

export default function Subscription() {
  return (
    <div className="mt-20 flex flex-col-reverse md:flex-row gap-[20px]  lg:gap-x-[166px] md:items-center max-w-[1070px] md:h-[473px] px-1 md:px-0">
      <img
        src="/Content Image 02.png"
        alt="Content Image 02"
        className="w-[300px] md:w-auto"
      />
      <div className="flex flex-col lg:max-h-[229px] gap-[10px] lg:gap-[30px] lg:my-auto lg:w-[556px] ">
        <p className="lg:min-h-[57px] h-auto font-bold leading-[30px] lg:leading-[57px] tracking-[-1.56px]  text-[30px] md:text-[40px] lg:text-[50px] text-[#19191B]">
          Subscription index
        </p>
        <p className="text-[#696871] leading-[30px] lg:w-[459px] lg:min-h-[90px] h-auto tracking-[-0.63px] font-normal mulish text-[15px] md:text-[19px] lg:text-[20px]  text-wrap">
          A daily dataset to keep you up to date on subscription market trends
          and what's happening in your vertical.
        </p>
        <p className="w-[89px] h-[22px] font-bold text-[17px] tracking-[-0.53px] text-[#5454D4]/100">
          Learn more
        </p>
      </div>
    </div>
  );
}
