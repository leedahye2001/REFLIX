import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

const Modal = styled.div`
  position: "absolute";
  top: "50%";
  left: "50%";
  transform: "translate(-50%, -50%)";
  width: "300px";
  max-width: "100%";
  max-height: "90%";
  overflow-y: "auto";
  background-color: "white";
`;

// const onMouseOver = (e) => {
// let defaultY = 213.40000915527344;
// let defaultX = 99;
// setModalMode(true);
// let target = e.target;

// if (target.tagName === "IMG") {
//   const x = e.target.getBoundingClientRect().left;
//   const y = window.pageYOffset + e.target.getBoundingClientRect().top;
//   //   setPreviewImgSrc(target.src);
//   setPreviewTitle(target.parentNode.dataset.value);
//   //   setCoordinate([x - defaultX, y - defaultY]);
// }

//   if (
//     modalMode &&
//     !e.target.className.includes("previewModal") &&
//     !e.target.className.includes("poster")
//   ) {
//     setModalMode(false);
//   }
// };

// const handleHover = () => {
//   setHover(!hover);
// };
// const handlePlusHover = () => {
//   setplus(!plus);
// };

const ContentListModal = ({
  
  running,
  year,

  key,
  id,
  img,
  contentName,
  contentCategory,
}) => {
  //   const filteredContents=contentInfo.filter(content=>content.)

  //   const [hover, setHover] = useState(false);
  //   const [plus, setplus] = useState(false);
  const [show, setShow] = useState("none");
  const iconMouseOver = () => {
    setShow("block");
  };

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
    // <div
    //   style={{
    //     display: isOpen ? "block" : "none",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "fixed",
    //       top: 0,
    //       left: 0,
    //       width: "100vw",
    //       height: "100vh",
    //       backgroundColor: "rgba(0, 0, 0, 0.03)",
    //     }}
    //   ></div>
    <div
      //   onMouseLeave={closeModal}
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
            {/* <div>
              {plus ? (
                <AiFillPlusCircle
                  color="white"
                  size="30"
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlinePlusCircle color="white" size="30" />
              )}
            </div> */}
          </div>

          {/* <div>
            {hover ? (
              <IoIosArrowDropdown
                color="white"
                size="30"
                className="cursor-pointer"
              />
            ) : (
              <IoIosArrowDropdownCircle color="white" size="30" />
            )}
          </div> */}
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
    // </div>
  );
};

export default ContentListModal;
