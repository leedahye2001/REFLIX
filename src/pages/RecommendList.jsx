import { useContext, useEffect, useRef, useState } from "react";
import { loginUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import loginBG from "../assets/images/kids.mp4";
import { useUserState, useUserDispatch } from "../context/context";
import styled from "styled-components";
import throttle from "../components/util";

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

const ScrollSection = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  :hover {
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    );
  }
`;
const FrontSection = styled.div`
  background-color: white;
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  :hover {
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    );
  }
`;

const RecommendList = (props) => {
  const { content, contents } = props;
  const [contentInfo, setContentInfo] = useState(null);

  const getContentInfo = async () => {
    try {
      const response = await fetch(`/auth/movie/test`);
      const data = await response.json();
      setContentInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContentInfo();
  }, []);

  /* 특정 글자 수 넘으면 ... 으로 넘기기 */
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  /* 좌클릭하는 상티 */
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  /* 클릭 멈춘 상태 */
  const onDragEnd = () => {
    setIsDrag(false);
  };

  /* 클릭하던 안 하던 마우스를 움직이는 상태 */
  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 30; /* 좌우로 넘길 때, delay 되는 시간 */
  const onThrottleDrageMove = throttle(onDragMove, delay);

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
            <p className="flex justify-center font-bold text-white laptop:text-5xl text-4xl">
              {user.userId}님
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        ) : (
          <>
            <p className="flex justify-center font-bold text-white laptop:text-5xl text-4xl">
              비로그인
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        )}
        <br />
        {/* <ContentListWrapper>
          <ContentList>
            <Content>1</Content>
            <Content>2</Content>
            <Content>3</Content>
            <Content>4</Content>
            <Content>5</Content>
          </ContentList>
        </ContentListWrapper> */}
        <div className="grid grid-cols-1 mx-auto laptop:w-[800px] pt-[70px]">
          {contentInfo ? (
            <ScrollSection
              ref={scrollRef}
              onMouseDown={onDragStart}
              onMouseMove={isDrag ? onThrottleDrageMove : null}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
            >
              {contentInfo.map((review) => (
                <div key={review.contentsId}>
                  <div className="grid grid-rows-1">
                    <div className="w-[250px] ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/z56bVX93oRG6uDeMACR7cXCnAbh.jpg`}
                        alt={review.contentName}
                        className="rounded-xl"
                      />
                    </div>
                    <p className="py-5 text-[20px] text-[#999]">
                      {truncate(review.contentName, 20)}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollSection>
          ) : (
            <>No Reviews</>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendList;
