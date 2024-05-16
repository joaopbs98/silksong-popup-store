"use client";

import React, { useState } from "react";
import Image from "next/image";
import Badge from "./shared/Badge";

const Card = ({ text, content }) => {
  const isVideo = content.endsWith(".mp4");
  const [explorePosition, setExplorePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    const adjustedX = offsetX + 30;
    const adjustedY = offsetY + 40;

    setExplorePosition({ x: adjustedX, y: adjustedY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-[500px] group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="h-full rounded-none overflow-hidden group-hover:rounded-[34px] transition-all duration-300 ease-default">
        {isVideo ? (
          <video
            src={content}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={content}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        )}
      </div>
      {isHovered && (
        <div
          className="absolute rounded-lg bg-[#F1E0CE] text-black px-4 py-2 text-sm tracking-widest"
          style={{
            top: explorePosition.y,
            left: explorePosition.x,
            transform: "translate(-50%, -50%)",
          }}>
          EXPLORE
        </div>
      )}
      <div className="w-full h-24 bg-[#F1E0CE]  group-hover:rounded-[34px] rounded-none overflow-hidden transition-all duration-300 ease-default flex items-start justify-start p-4 flex-col gap-1">
        <div className="flex">
          <Badge content="C2D" />
        </div>
        <p className="text-xl font-semibold text-black lg:text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default Card;
