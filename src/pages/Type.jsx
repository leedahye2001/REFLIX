import { Link } from "react-router-dom";
import styled from "styled-components";
import { Block, YearWrapper } from "../css/YearStyle";

const YearContent = styled.div``;

const Type = () => {
  const type = [
    {
      keyword: "영화",
    },
    {
      keyword: "드라마",
    },
    {
      keyword: "애니메이션",
    },
    {
      keyword: "시트콤",
    },
    {
      keyword: "게임",
    },
    {
      keyword: "다큐멘터리",
    },
  ];

  return (
    <>
      <div>
        <div className="flex grid items-center">
          <div className="relative bg-black justify-center align-center h-[1024px]"></div>
          <YearWrapper>
            <h1>본인이 선호하는 콘텐츠(영상 종류)를 선택해주세요.</h1>
            {/* <Block>
              <YearContent> */}
            <div className="grid">
              {type.map(({ keyword }) => (
                <button
                  className="grid items-center bg-[#303030] mt-10 rounded-md h-[60px] hover:bg-gray-500
                  hover:ring-2 ring-orange-500"
                  key={keyword}
                >
                  <h2 className="text-white grid align-center">{keyword}</h2>
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                className="grid items-center bg-[#fff] mt-10 rounded-md h-[60px] 
                  hover:ring-2 ring-orange-500 w-[100px]"
              >
                <h2 className="text-[#f57b00] grid align-center">모르겠어요</h2>
              </button>
              <Link to="/year">
                <button
                  className="grid items-center bg-[#f57b00] mt-10 rounded-md h-[60px]
                  hover:ring-2 ring-white w-[100px]"
                >
                  <h2 className="text-white grid align-center">다음</h2>
                </button>
              </Link>
            </div>
            {/* </YearContent>
            </Block> */}
          </YearWrapper>
        </div>
      </div>
    </>
  );
};
export default Type;
