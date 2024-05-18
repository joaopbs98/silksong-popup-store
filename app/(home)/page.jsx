"use client";

import React from "react";
import Button from "@/components/shared/Button";
import Card from "@/components/Card";
import { CardInfo } from "@/constants";
import Marquee from "react-fast-marquee";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Navigation/Nav";
import Image from "next/image";
import List from "@/components/List";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const page = () => {
  const threeCards = CardInfo.items.slice(0, 3);
  const twoCards = CardInfo.items.slice(3, 5);

  const text =
    "At the heart of everything we do is the human experience to feel. To love. To imagine. To wonder. To guide. To jest. To rule. To serve. To belong.";

  const words = text.split(" ");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hoveredWordIndex, setHoveredWordIndex] = React.useState(-1);

  return (
    <main className="flex flex-col gap-8 overflow-hidden">
      <Nav />
      <Hero />
      <hr className="w-full h-1 border-black border-dotted" />
      <div className="flex w-full h-fit p-4 xl:p-10 mb-20">
        <Card
          backgroundColor="#324242"
          text="Discover yourself"
          content="/compo-enhanced.mp4"
          className=""
        />
      </div>
      <hr className="w-full h-1 border-black border-dotted" />
      <div className="flex flex-col gap-2 justify-center items-center h-full">
        <p className="text-3xl xl:text-[4rem] p-6 text-center md:max-w-screen-md lg:leading-[4rem] 2xl:max-w-[35%] font-semibold">
          Building irrational love between brands and the world
        </p>
        <p className="text-md xl:text-lg p-6 text-center">
          Discover The Hottest <span className="font-bold">Korean</span>{" "}
          Products in our Worldwide{" "}
          <span className="font-bold">Pop-Up Store</span>
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-[10rem] lg:gap-8 w-full p-4 pb-20 lg:p-10">
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
      <div className="flex flex-wrap max-w-screen-sm self-center uppercase justify-center items-center font-normal text-center text-2xl md:text-3xl lg:text-4xl pt-20">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-transform duration-300 ease-out m-2 ${
              index === hoveredWordIndex
                ? "transform scale-110 font-semibold"
                : ""
            }`}
            onMouseEnter={() => setHoveredWordIndex(index)}
            onMouseLeave={() => setHoveredWordIndex(-1)}
            style={{ whiteSpace: "nowrap" }}>
            {word}
          </span>
        ))}
      </div>
      <List />
      <Footer />
    </main>
  );
};

export default page;
