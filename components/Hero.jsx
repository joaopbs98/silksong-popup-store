import React from "react";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <Marquee
        className="uppercase w-full border-[#282828] border-dotted border-[1px] cursor-pointer bg-[#E6E6E6]"
        pauseOnHover={true}
        autoFill={true}>
        <p className="pr-6">UNLOCK YOUR OWN IMPACT WITH OUR ARCHETYPE CARDS</p>
        <p className="flex items-center font-semibold text-black pr-40">
          LEARN MORE
          <ArrowRight className="h-[14px]" />
        </p>
      </Marquee>
      <div
        id="main-title"
        className="flex flex-col gap-4 justify-center items-center h-full">
        <h1 className="font-erica leading-[0.85] text-[4rem] md:text-[9rem] xl:text-[14rem] 2xl:text-[22rem] text-center w-full">
          SILKSONG
        </h1>
      </div>
    </>
  );
};

export default Hero;
