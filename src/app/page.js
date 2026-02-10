export const metadata = {
  title: "travel pakstain",
  icons: {
    icon: "/favicon.ico", // for favicon (16x16, 32x32)
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import Section from "@/app/_components/section/Section";
import HeroSection from "@/app/_components/herosection/HeroSection";
import HeroSection2 from "@/app/_components/herosection2/HeroSection2";
import HeroSection3 from "@/app/_components/herosection3/HeroSection3";
import HeroSection5 from "@/app/_components/herosection5/HeroSection5";
import HeroSection4 from "@/app/_components/herosection4/HeroSection4";
import HeroSection6 from "@/app/_components/herosection6/HeroSection6";
import HeroSection7 from "@/app/_components/herosection7/HeroSection7";
import HeroSection8 from "@/app/_components/herosection8/HeroSection8";
import Banner from "@/app/_components/banner/banner";
const page = () => {
  return (
    <>
      {/* <Header/> */}
      <Banner />
      <Section />
      <HeroSection4 />
      <HeroSection7 />
      <HeroSection />
      <HeroSection8 />
      <HeroSection2 />

      <HeroSection3 />

      <HeroSection6 />
      <HeroSection5 />
    </>
  );
};

export default page;
