import React from "react";

const Button = ({ content, href }) => {
  return (
    <div className="flex w-fit px-4 py-1 border-[#282828] border-dotted border-[1px] rounded-[75px] text-sm uppercase cursor-pointer hover:text-[#F8F8F5] hover:bg-[#282828] transition-all duration-default ease-default">
      <a href={href}>{content}</a>
    </div>
  );
};

export default Button;
