import React from "react";

const ContentItem = ({ image, title, onClick, simir, genre, year }) => {
  return (
    <>
      <div className="grid grid-rows-1" onClick={onClick}>
        <div className="w-[250px]">
          <img src={`${image}`} alt={title} className="rounded-xl text-white" />
        </div>
        <p className="font-semibold pt-5 text-[23px] text-[#999]">{title}</p>
        <span className="font-light"> {year}</span>
        <p className="font-light text-[20px] text-[#999]">
          {genre} · <span className="text-[#36c642]">● {simir}% 일치</span>
        </p>
      </div>
    </>
  );
};

export default ContentItem;
