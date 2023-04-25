import styled from "styled-components";
import { Block, YearWrapper } from "../css/YearStyle";

const YearContent = styled.div``;

const Year = () => {
  const year = [
    {
      keyword: "2000년대 이전",
    },
    {
      keyword: "2000년대 (2000 ~ 2009)",
    },
    {
      keyword: "2010년대 (2010 ~ 2019)",
    },
    {
      keyword: "2020년 이후 ~",
    },
  ];

  return (
    <>
      <div>
        <div className="flex grid items-center">
          <div className="relative bg-black justify-center align-center h-[1024px]"></div>
          <YearWrapper>
            <h1>본인이 선호하는 콘텐츠의 연도를 선택해주세요.</h1>
            <Block>
              <YearContent>
                {year.map(({ keyword }) => (
                  <div key={keyword}>
                    <h2>{keyword}</h2>
                  </div>
                ))}
              </YearContent>
            </Block>
          </YearWrapper>
        </div>
      </div>
    </>
  );
};
export default Year;
