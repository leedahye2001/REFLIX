import React from "react";
import styled from "styled-components";
import { FaRegSadTear } from "react-icons/fa";

const NoproductTextWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 50px 0;
  font-size: 150px;
  color: silver;
  :first-child {
    padding-bottom: 200px;
  }
  p {
    color: silver;
    font-size: 20px;
    padding-top: 10px;
  }
`;

const NoContentDetail = () => {
  return (
    <NoproductTextWrapper>
      <FaRegSadTear />
      <p>존재하는 데이터가 없습니다.</p>
    </NoproductTextWrapper>
  );
};

export default NoContentDetail;
