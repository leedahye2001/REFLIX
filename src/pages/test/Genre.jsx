import Keyword from "../../components/Keyword";

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

  const test = [{ keyword: "본인이 선호하는 콘텐츠의 장르를 선택해주세요." }];

  return (
    <>
      <Keyword type={type} test={test} />
    </>
  );
};
export default Genre;
