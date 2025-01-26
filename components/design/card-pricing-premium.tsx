import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { title } from "process";

export default function CardpricingPremium() {
  return (
    <Card
      className={`overflow-hidden flex flex-col justify-around min-h-[441px] min-w-[330px] scale-[1.10] 
      size-auto shadow-none bg-[#FF7143]/100 rounded-[10px] text-center`}
    >
      {/* min-h-[473px] min-w-[376px]  */}
      <div className="min-h-[441px] min-w-[330px] pt-6">
        <CardHeader className="flex flex-col justify-between">
          <CardTitle className="font-normal leading-[28px] tracking-[-0.58px] text-white/70 text-[18px]">
            Premium
          </CardTitle>
          <CardDescription className="text-[60px] font-bold leading-[56px] text-white tracking-[-1.03px]">
            $29
            <span className="text-[30px]">/month</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between size-auto min-w-[118px] min-h-[150px] mulish leading-[50px] tracking-[-0.53px] font-normal text-[17px] text-white">
          <p>10 Website</p>
          <p>15 GB Hosting</p>
          <p>Premium Support</p>
        </CardContent>
        <div className="pt-2">
          <Button className="shadow-none w-[305px] h-[60px] overflow-hidden text-center bg-[#9F3919] stroke-[#C31A12] border border-[#C31A12] rounded-[10px] text-white text-[17px] font-bold leading-[-0.53px]">
            <span className="w-[201px] h-[22px]">Get started</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
