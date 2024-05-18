"use client";

import React, { useState } from "react";
import Image from "next/image";

const List = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const handleMouseEnter = (city, image) => {
    setHoveredCity(city, image);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  const cityImages = {
    LISBON: "/lisbon.jpg",
    TOKYO: "/tokyoNew.jpg",
    MADRID: "/madrid.webp",
  };

  const cityListItems = {
    LISBON: ["We11done", "KYE", "MINJUKIM"],
    TOKYO: ["Amorepacific", "COSRX", "Innisfree"],
    MADRID: ["WNDERKAMMER", "Goen J", "Missha", "8 Seconds"],
  };

  return (
    <div
      id="list"
      className="flex flex-col gap-4 justify-center items-center h-full relative">
      <hr className="w-full h-1 border-black border-dotted" />
      <p className="font-semibold text-sm md:text-md self-start pl-10">
        ⦿ some of our past locations
      </p>
      <div className="flex flex-col w-full gap-2">
        {Object.entries(cityImages).map(([city, image]) => (
          <React.Fragment key={city}>
            <div
              className="flex justify-between w-full items-center px-4 md:px-10"
              onMouseEnter={() => handleMouseEnter(city, image)}
              onMouseLeave={handleMouseLeave}>
              <p className="text-2xl xl:text-[4rem] p-6 text-start flex-grow-0 basis-1/2 font-semibold">
                {city}
              </p>
              <ul className="text-sm md:text-lg flex-grow-0 basis-1/2 text-end">
                {cityListItems[city].map((item, index) => (
                  <li key={index} className="text-right">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="w-full h-1 border-black border-dotted" />
          </React.Fragment>
        ))}
      </div>

      {hoveredCity && (
        <div
          className="absolute rounded-lg shadow-lg"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}>
          <Image
            src={cityImages[hoveredCity]}
            alt={hoveredCity}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default List;
