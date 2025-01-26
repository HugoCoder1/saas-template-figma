import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="pt-6 flex items-center justify-between max-w-[1070px] h-[60px]">
      <img src="/Logo Color.svg" alt="" className="w-[199.48px] h-[39.22px]" />
      <div className="flex gap-x-[49px] gap-y-[10px] overflow-hidden w-[327px] text-[15px] tracking-[-0.47px] text-[#19191B]  h-[32px]">
        <div className="flex flex-col">
          <Link href="#" className="w-[42px] h-[20px] font-bold">
            Home
          </Link>
          <div className="border-b-2 pb-2 w-[41px] h-[2px] border-[#5454D4]" />
        </div>
        <Link href="#" className="w-[61px] h-[20px] text-[#696871] ">
          Features
        </Link>
        <Link href="#" className="text-[#696871] w-[47px] h-[20px]">
          Pricing
        </Link>
        <Link href="#" className="text-[#696871] w-[30px] h-[20px]">
          Blog
        </Link>
      </div>
      <Button className="w-[211px] h-[60px] bg-[#FF7143] overflow-hidden font-bold text-[17px] text-white shadow-none tracking-[-0.53px]">
        Get Started
      </Button>
    </div>
  );
}
