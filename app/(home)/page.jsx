"use client";

import React from "react";
import Button from "@/components/shared/Button";
import Card from "@/components/Card";
import { CardInfo } from "@/constants";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Navigation/Nav";
import Image from "next/image";

const page = () => {
  const threeCards = CardInfo.items.slice(0, 3);
  const twoCards = CardInfo.items.slice(3, 5);

  const text =
    "At the heart of everything we do is the human experience to feel. To love. To imagine. To wonder. To guide. To jest. To rule. To serve. To belong.";

  const words = text.split(" ");

  const [hoveredWordIndex, setHoveredWordIndex] = React.useState(-1);

  return (
    <main className="flex flex-col gap-8 overflow-hidden">
      <Nav />
      <Marquee
        className="uppercase w-full border-[#282828] border-dotted border-[1px] cursor-pointer bg-[#E6E6E6]"
        pauseOnHover={true}
        autoFill={true}>
        <p className="pr-6">
          UNLOCK YOUR INDUSTRY IMPACT WITH OUR ARCHETYPE CARDS
        </p>
        <p className="flex items-center font-semibold text-black pr-40">
          LEARN MORE
          <ArrowRight className="h-[14px]" />
        </p>
      </Marquee>
      <div id="main-title" className="flex justify-center items-center h-full">
        <h1 className="font-erica leading-[0.85] text-[4rem] md:text-[9rem] xl:text-[14rem] 2xl:text-[22rem] text-center w-full">
          SILKSONG
        </h1>
      </div>
      <div className="flex w-full h-fit p-10 mb-20">
        <Card
          backgroundColor="#324242"
          text="Discover yourself"
          content="/compo.mp4"
          className=""
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-[10rem] lg:gap-8 w-full p-4 lg:p-10">
          {threeCards.map((item) => (
            <Card
              key={item.title}
              backgroundColor={item.colorMain}
              text={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-[10rem]  w-full lg:gap-8 p-4 lg:p-10 justify-between">
          {twoCards.map((item) => (
            <Card
              key={item.title}
              backgroundColor={item.colorMain}
              text={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap max-w-screen-md self-center uppercase justify-center items-center font-semibold text-center text-xl md:text-3xl lg:text-4xl pt-20">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-300 ease-out m-2 ${
              index === hoveredWordIndex ? "transform scale-110" : ""
            }`}
            onMouseEnter={() => setHoveredWordIndex(index)}
            onMouseLeave={() => setHoveredWordIndex(-1)}
            style={{ whiteSpace: "nowrap" }}>
            {word}
          </span>
        ))}
      </div>
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
    </main>
  );
};

export default page;
