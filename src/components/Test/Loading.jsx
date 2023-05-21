import Spinner from "../../assets/images/Spinner.svg";
import React from "react";
import { MainTitle } from "./css/PageSectionStyled";
import { LoadinMain } from "./css/LoadingStyled";

const Loading = () => {
  return (
    <LoadinMain>
      <MainTitle>알맞은 콘텐츠를 매칭 중입니다.</MainTitle>
      <img src={Spinner} />
    </LoadinMain>
  );
};

export default Loading;
