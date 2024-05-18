import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-black text-white flex flex-col justify-center items-center p-8">
      <Image
        src="/assets/LogoWhite.png"
        width={30}
        height={30}
        alt="logo"
        className="hidden md:block"
      />
      <div className="text-center">
        <p className="text-2xl">
          How do <span className="underline">you</span> want to make people
          feel?
        </p>
      </div>

      <div className="flex items-center my-4 w-[18rem] h-[18rem]">
        <hr className="h-[0.15rem] bg-white w-full rotate-90 border-dotted" />
      </div>
      <div className=" flex w-full self-center flex-col gap-8 items-center">
        <p className="text-2xl text-center">Silk Elegance, Song of Style</p>
        <div className="flex w-fit px-4 py-1 border-white border-dotted border-[1px] rounded-[75px] text-sm uppercase cursor-pointer hover:text-[#282828] hover:bg-white transition-all duration-default ease-default">
          Get in Touch
        </div>
      </div>
      <div
        id="main-title"
        className="flex justify-center items-center h-full pt-8">
        <h1 className="font-erica text-[4rem] md:text-[9rem] xl:text-[14rem] 2xl:text-[22rem] text-center w-full text-white">
          SILKSONG
        </h1>
      </div>
      <div className="w-full items-start">
        <p className="text-xs">SILKSONG&trade; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
