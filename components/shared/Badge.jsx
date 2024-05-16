import React from "react";

const Badge = ({ content }) => {
  return (
    <div className="flex w-fit px-2 py-[0.15rem] border-[#282828] border-dotted border-[1px] rounded-[75px] text-xs uppercase font-light bg-black bg-opacity-10">
      <p>{content}</p>
    </div>
  );
};

export default Badge;
