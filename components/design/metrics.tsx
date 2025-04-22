import React from "react";

export default function Metrics() {
  return (
    <div className="mt-10 lg:mt-20 flex flex-col md:flex-row gap-y-[42px] md:gap-y-[0px] md:justify-between md:items-center md:max-w-[967.37px] md:min-h-[474px] px-2 lg:px-0">
      <div className="flex flex-col gap-y-[22px] md:gap-y-[30px] w-[556px] max-h-[199px] my-auto">
        <p className="h-[57px] leading-[57px] font-bold tracking-[-1.56px] text-[50px] text-[#19191B]/100">
          In-depth metrics
        </p>
        <p className="min-h-[60px] w-[459px] h-auto mulish font-normal leading-[30px] tracking-[-0.63px] text-[20px] text-[#696871]">
          Accurate real-time reporting at your fingertips. Getting data has
          never been easier.
        </p>
        <p className="text-[#5454D4] font-bold text-[17px] tracking-[-0.53px] size-auto min-w-[89px] min-h-[22px]">
          Learn more
        </p>
      </div>
      <img
        src="/Content Image.png"
        alt="Content Image"
        className="w-[400px] md:w-[346.37px] h-[474px] "
      />
    </div>
  );
}
