"use client";

import React, { useState, useEffect } from "react";
import Button from "../shared/Button";
import Image from "next/image";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (window.innerWidth >= 768) {
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`max-w-7xl mx-auto px-4 z-10 transition-transform duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}>
      <div className="bg-[#f8f8f5] w-screen h-16 flex justify-between items-center">
        <Image
          src="/assets/Logo.png"
          width={30}
          height={30}
          alt="logo"
          className="hidden md:block"
        />
        <div className="flex items-center space-x-1 md:space-x-4">
          <Button content="Home" href="/" />
          <Button content="About" href="/" />
          <Button content="Services" href="/" />
          <Button content="Contact" href="/" />
        </div>
        <div className="w-10 h-10"></div>
      </div>
    </nav>
  );
};

export default Nav;
