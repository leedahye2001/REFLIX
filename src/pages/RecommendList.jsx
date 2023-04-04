import { useContext, useState } from "react";
import { loginUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import loginBG from "../assets/images/kids.mp4";
import { useUserState, useUserDispatch } from "../context/context";
import styled from "styled-components";

const ContentListWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContentList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Content = styled.div`
  background-color: white;
  width: 200px;
  height: 250px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const RecommendList = () => {
  const { user } = useUserState();
  return (
    <div className="flex grid items-center">
      <div className="relative bg-black justify-center align-center h-[1024px]"></div>
      <div
        className="text-center flex-cols z-1
        absolute
        top-[15%]
        left-[50%]
        -translate-x-1/2"
      >
        <br />
        {user ? (
          <>
            <p className="flex justify-center font-bold text-white tablet:text-5xl text-4xl">
              {user.userId}님
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] tablet:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        ) : (
          <>
            <p className="flex justify-center font-bold text-white tablet:text-5xl text-4xl">
              비로그인
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] tablet:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        )}
        <br />
        <ContentListWrapper>
          <ContentList>
            <Content>1</Content>
            <Content>2</Content>
            <Content>3</Content>
            <Content>4</Content>
            <Content>5</Content>
          </ContentList>
        </ContentListWrapper>
      </div>
    </div>
  );
};

export default RecommendList;
