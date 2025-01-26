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

export default function Cardpricing({
  cardcolor,
  buttoncolor,
  scale,
  title,
  type,
  info1,
  info2,
  info3,
  month,
}: {
  cardcolor: string;
  buttoncolor: string;
  scale?: boolean;
  title: string;
  type: string;
  info1: string;
  info2: string;
  info3: string;
  month?: string;
}) {
  return (
    <Card
      className={`overflow-hidden ${
        scale ? "min-w-[376px]" : "min-w-[330px]"
      } flex flex-col justify-around ${
        scale ? "min-h-[473px]" : "min-h-[441px]"
      } size-auto shadow-none bg-[${cardcolor}] rounded-[10px] text-center`}
    >
      <CardHeader className="flex flex-col justify-between">
        <CardTitle className="text-[#696871] font-normal leaing-[28px] text-[18px] tracking-[-0.56px]">
          {title}
        </CardTitle>
        <CardDescription className="h-auto w-auto text-[60px] font-bold leading-[56px] text-[#1D293F] tracking-[-1.03px]">
          {type}
          {month && <span className="text-[30px]">/month</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between size-auto min-w-[118px] min-h-[150px] mulish leading-[50px] tracking-[-0.53px] font-normal text-[17px] text-[#696871]">
        <p>{info1}</p>
        <p>{info2}</p>
        <p>{info3}</p>
      </CardContent>
      <CardFooter>
        <Button className="shadow-none w-[285px] h-[60px] overflow-hidden text-center bg-white stroke-[#EAEAF2] border border-[#EAEAF2] rounded-[10px] text-[#5454D4] text-[17px] font-bold leading-[-0.53px] ">
          <span className="w-[201px] h-[22px]">Get started</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
