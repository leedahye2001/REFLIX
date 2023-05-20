import Keyword from "../../components/Keyword";

// Type이라고 되어있지만 키워드 포함된 컴포넌트임
const Type = () => {
  const type = [
    {
      keyword: "based on novel or book",
    },
    {
      keyword: "new york city",
    },
    {
      keyword: "london, england",
    },
    {
      keyword: "sibling relationship",
    },
    {
      keyword: "competition",
    },
    {
      keyword: "high school",
    },
    {
      keyword: "romance",
    },
    {
      keyword: "police",
    },
    {
      keyword: "martial arts",
    },
    {
      keyword: "california",
    },
    {
      keyword: "paris, france",
    },
    {
      keyword: "miniseries",
    },
    {
      keyword: "prison",
    },
    {
      keyword: "anthology",
    },
    {
      keyword: "game show",
    },
    {
      keyword: "friendship",
    },
    {
      keyword: "england",
    },
    {
      keyword: "japan",
    },
    {
      keyword: "suicide",
    },
    {
      keyword: "holiday",
    },
    {
      keyword: "chicago, illinois",
    },
    {
      keyword: "parent child relationship",
    },
    {
      keyword: "sketch comedy",
    },
    {
      keyword: "loss of loved one",
    },
    {
      keyword: "small town",
    },
    {
      keyword: "sports",
    },
    {
      keyword: "love triangle",
    },
    {
      keyword: "stand-up comedy",
    },
    {
      keyword: "talk show",
    },
    {
      keyword: "australia",
    },
    {
      keyword: "hotel",
    },
    {
      keyword: "telenovela",
    },
    {
      keyword: "spy",
    },
    {
      keyword: "world war ii",
    },
    {
      keyword: "variety show",
    },
    {
      keyword: "corruption",
    },
    {
      keyword: "detective",
    },
    {
      keyword: "monster",
    },
    {
      keyword: "superhero",
    },
    {
      keyword: "san francisco, california",
    },
    {
      keyword: "family",
    },
    {
      keyword: "canada",
    },
    {
      keyword: "france",
    },
    {
      keyword: "future",
    },
    {
      keyword: "woman director",
    },
    {
      keyword: "cooking",
    },
    {
      keyword: "journalist",
    },
    {
      keyword: "musical",
    },
    {
      keyword: "politics",
    },
  ];

  const test = [{ keyword: "본인이 선호하는 키워드를 모두 선택해주세요." }];

  return (
    <>
      <Keyword type={type} test={test} />
    </>
  );
};
export default Type;
