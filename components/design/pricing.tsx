import React from "react";
import { Button } from "../ui/button";
import Cardpricing from "./card-pricing";
import CardpricingPremium from "./card-pricing-premium";

export default function Pricing() {
  return (
    <div className="mt-20 max-w-[1111px] min-h-[695px] h-auto">
      <div className="flex items-center min-h-[140px] gap-x-[242px] overflow-hidden">
        <p className="w-[523px] min-h-[140px] h-auto text-[60px] leading-[70px] tracking-[-1.88px] text-[#19191B]/100 font-bold">
          Get the right plan for future product.
        </p>
        <div className="flex items-center w-[346px] h-[65px] justify-around overflow-hidden bg-[#F7F7FB] rounded-[10px] border border-[#F7F7FB]">
          <Button className="w-[160px] h-[55px] bg-[#5454D4]/100 rounded-tl-lg rounded-tr-sm rounded-bl-md rounded-br-none font-bold text-[1rem] text-center tex-white tracking-[-0.5px]">
            <span className="w-[175px] h-auto min-h-[21px]">Yearly</span>
          </Button>
          <span className="text-center w-[175px] min-h-[23px] h-auto font-bold text-[1rem] text-[#19191B]/100 tracking-[-0.5px]">
            Montly
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row justify-around items-center mt-16">
        <Cardpricing
          cardcolor="#F8F8F8"
          buttoncolor=""
          title={"Starter"}
          type={"Free"}
          info1={"1 Website"}
          info2={"5 GB Hosting"}
          info3={"Limited Support"}
        />
        <CardpricingPremium />
        <Cardpricing
          buttoncolor=""
          title={"Entreprise"}
          type={"$49"}
          month="/month"
          info1={"Unlimited Website"}
          info2={"50 GB Hosting"}
          info3={"Premium Support"}
          cardcolor="#F8F8F8"
        />
      </div>
    </div>
  );
}
