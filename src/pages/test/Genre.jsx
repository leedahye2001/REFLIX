import Keyword from "../../components/Keyword";

const Genre = () => {
  const type = [
    {
      keyword: "드라마",
    },
    {
      keyword: "범죄",
    },
    {
      keyword: "액션",
    },
    {
      keyword: "모험",
    },
    {
      keyword: "애니메이션",
    },
    {
      keyword: "코미디",
    },
    {
      keyword: "미스터리",
    },
    {
      keyword: "다큐멘터리",
    },
    {
      keyword: "서부",
    },
    {
      keyword: "SF",
    },
    {
      keyword: "스릴러",
    },
    {
      keyword: "로맨스",
    },
    {
      keyword: "공포",
    },
    {
      keyword: "판타지",
    },
    {
      keyword: "가족",
    },
    {
      keyword: "역사",
    },
    {
      keyword: "음악",
    },
    {
      keyword: "전쟁",
    },
    {
      keyword: "TV",
    },
    {
      keyword: "영화",
    },
    {
      keyword: "Kids",
    },
    {
      keyword: "Sci-Fi & Fantasy",
    },
    {
      keyword: "Reality",
    },
    {
      keyword: "Action & Adventure",
    },
    {
      keyword: "Soap",
    },
    {
      keyword: "News",
    },
    {
      keyword: "War & Politics",
    },
    {
      keyword: "Talk",
    },
  ];

  const test = [
    { keyword: "본인이 선호하는 콘텐츠의 장르를 모두 선택해주세요." },
  ];

  return (
    <>
      <Keyword type={type} test={test} />
    </>
  );
};
export default Genre;
