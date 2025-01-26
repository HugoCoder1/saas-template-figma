import React from "react";

export default function Metrics() {
  return (
    <div className="mt-20 flex justify-between items-center max-w-[967.37px] min-h-[474px]">
      <div className="flex flex-col gap-y-[30px] w-[556px] max-h-[199px] my-auto">
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
        className="w-[346.37px] h-[474px]"
      />
    </div>
  );
}
