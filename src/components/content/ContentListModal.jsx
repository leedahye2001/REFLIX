import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

// const ModalWrapper = styled.div`
//   display: ${(props) => (props.isOpen ? "block" : "none")};
// `;

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

const ContentListModal = ({
  isOpen,
  closeModal,
  title,
  url,
  genre,
  running,
  year,
}) => {
  const [hover, setHover] = useState(false);
  const [plus, setplus] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };
  const handlePlusHover = () => {
    setplus(!plus);
  };

  return (
    <div
      style={
        {
          // display: isOpen ? "block" : "none",
        }
      }
    >
      {/* <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      ></div> */}
      <div
        onMouseLeave={closeModal}
        className="absolute top-[50%] left-[50%] rounded-md
        bg-[#171717] w-[300px] -translate-y-1/2 -translate-x-1/2 shadow-md"
      >
        <img src={url} alt={title} className="rounded-md" />
        <div className="px-10 py-5">
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-2">
              <h1 className="text-white text-[20px] font-semibold">{title}</h1>
              <div onClick={handlePlusHover}>
                {plus ? (
                  <AiFillPlusCircle
                    color="white"
                    size="30"
                    className="cursor-pointer"
                  />
                ) : (
                  <AiOutlinePlusCircle color="white" size="30" />
                )}
              </div>
            </div>

            <div onClick={handleHover}>
              {hover ? (
                <IoIosArrowDropdown
                  color="white"
                  size="30"
                  className="cursor-pointer"
                />
              ) : (
                <IoIosArrowDropdownCircle color="white" size="30" />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white">{year}년</span>
            <span className="text-white">·</span>
            <span className="text-white">{genre}</span>
            <span className="text-white">·</span>
            <span className="text-white">{running}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentListModal;
