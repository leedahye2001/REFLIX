import { useState } from "react";

const ContentListModal = ({
  running,
  year,
  key,
  id,
  img,
  contentName,
  contentCategory,
}) => {
  const [show, setShow] = useState("none");

  const onMouseOver = (e) => {
    if (
      show === "block" &&
      e.target.tagName !== "IMG" &&
      e.target.tagName !== "A"
    ) {
      console.log(e.target);
      setShow("none");
    }
  };

  return (
    <div
      onMouseOver={onMouseOver}
      className="absolute top-[50%] left-[50%] rounded-md
        bg-[#171717] w-[300px] -translate-y-1/2 -translate-x-1/2 shadow-md"
    >
      <img src={`${img}`} alt={contentName} className="rounded-md" />
      <div className="px-10 py-5">
        <div className="flex justify-between items-center pb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-white text-[20px] font-semibold">
              {contentName}
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">{year}년</span>
          <span className="text-white">·</span>
          <span className="text-white">{contentCategory}</span>
          <span className="text-white">·</span>
          <span className="text-white">{running}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentListModal;
