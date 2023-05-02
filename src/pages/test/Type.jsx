import Keyword from "../../components/Keyword";

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

  const test = [
    { keyword: "본인이 선호하는 콘텐츠(영상 종류)를 선택해주세요." },
  ];

  return (
    <>
      <Keyword type={type} test={test} />
    </>
  );
};
export default Type;
