
import Image from "next/image";
import Hero from "./components/Hero"
import WhatWeDo from "./components/Do";
import Services from "./components/Service"
import Tool from "./components/Tools"
import IndustriesWeServe from "./components/Industries";
import ITSupport from "./components/ItSupport"
import WhyChooseUs from "./components/WhyChooseUs";
import DisclaimerBanner from "./components/DisclaimerBanner";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
       <>
       <DisclaimerBanner />
       <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <Tool />
      <IndustriesWeServe />
      <ITSupport />
      <WhyChooseUs />

       </>
  );
}
