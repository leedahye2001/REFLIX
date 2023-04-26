import { Link } from "react-router-dom";
import styled from "styled-components";
import { Block, YearWrapper } from "../css/YearStyle";

const Genre = () => {
  const type = [
    {
      keyword: "액션",
    },
    {
      keyword: "범죄",
    },
    {
      keyword: "SF",
    },
    {
      keyword: "코미디",
    },
    {
      keyword: "로맨스",
    },
    {
      keyword: "음악",
    },
    {
      keyword: "판타지",
    },
    {
      keyword: "하이틴",
    },
    {
      keyword: "공포",
    },
    {
      keyword: "서부",
    },
    {
      keyword: "역사",
    },
    {
      keyword: "스포츠",
    },
  ];

  return (
    <>
      <div>
        <div className="flex grid items-center">
          <div className="relative bg-black justify-center align-center h-[1024px]"></div>
          <YearWrapper>
            <h1>본인이 선호하는 콘텐츠의 장르를 선택해주세요.</h1>
            {/* <Block>
              <YearContent> */}
            <div className="grid grid-cols-2 desktop:grid-cols-3 gap-4">
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
export default Genre;
