import React, { useState } from "react";
import { BsPersonHeart, BsPersonXFill } from "react-icons/bs";
import styled from "styled-components";

const Bookmark = styled.button`
  display: flex;
  min-width: 140px;
  weight: 30px;
  padding: 10px 20px 10px 20px;
  /* height: 55px; */
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #c3c3c3;
  color: #626262;
  font-weight: bold;
  cursor: pointer;
  justify-content: center;

  &.mark-pink {
    background-color: ${({ isActive }) => (isActive ? "#fec3c3" : "#C3C3C3")};
    color: ${({ isActive }) => (isActive ? "#ff7b7b" : "#626262")};
  }
  &.mark-sky {
    background-color: ${({ isActive }) => (isActive ? "#8ebede" : "#C3C3C3")};
    color: ${({ isActive }) => (isActive ? "#3c8cc2" : "#626262")};
  }
`;

const BookmarkButton = ({ children, styles }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <Bookmark className={`${styles}`} isActive={isActive} onClick={handleClick}>
      {children === "최고예요" ? (
        <BsPersonHeart size="25" className="mr-2" />
      ) : (
        <BsPersonXFill size="25" className="mr-2" />
      )}
      {children}
    </Bookmark>
  );
};

export default BookmarkButton;
