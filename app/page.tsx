import Header from "@/components/design/Header";
import HeroSection from "@/components/design/hero-section";
import Info from "@/components/design/info";
import Metrics from "@/components/design/metrics";
import Pricing from "@/components/design/pricing";
import SectionLogo from "@/components/design/section-logo";
import Subscription from "@/components/design/subscription";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen max-w-[1146px] mx-auto overflow-hidden">
      <Header />
      <HeroSection />
      <SectionLogo />
      <Subscription />
      <Metrics />
      <Info />
      <Pricing />
    </div>
  );
}
