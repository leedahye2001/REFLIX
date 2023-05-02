import Keyword from "../../components/Keyword";

const Year = () => {
  const type = [
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

  const test = [{ keyword: "본인이 선호하는 콘텐츠의 연도를 선택해주세요." }];

  return (
    <>
      <Keyword type={type} test={test} />
    </>
  );
};
export default Year;
