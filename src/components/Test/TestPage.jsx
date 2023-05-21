import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background } from "../../css/Background";
import RecommendList from "../../pages/RecommendList";
import Button from "./Button";
import Content from "./Content";
import { TestMainPage } from "./css/TestPageStyled";
import Loading from "./Loading";
import PageSection from "./PageSection";

const years = [
  {
    id: "1990년대 이전",
    time: "1990년대 이전",
    desc: "",
  },
  {
    id: "1990년대 (1990 ~ 2000)",
    time: "1990년대 (1990 ~ 2000)",
    desc: "",
  },
  {
    id: "2000년대 (2000 ~ 2009)",
    time: "2000년대 (2000 ~ 2009)",
    desc: "",
  },
  {
    id: "2010년대 (2010 ~ 2019)",
    time: "2010년대 (2010 ~ 2019)",
    desc: "",
  },
  {
    id: "2020년 이후 ~",
    time: "2020년 이후 ~",
    desc: "",
  },
];
const genres = [
  { id: "드라마", keyword: "드라마", desc: "" },
  { id: "범죄", keyword: "범죄", desc: "" },
  { id: "액션", keyword: "액션", desc: "" },
  { id: "모험", keyword: "모험", desc: "" },
  { id: "애니메이션", keyword: "애니메이션", desc: "" },
  { id: "코미디", keyword: "코미디", desc: "" },
  { id: "미스터리", keyword: "미스터리", desc: "" },
  { id: "다큐멘터리", keyword: "다큐멘터리", desc: "" },
  { id: "서부", keyword: "서부", desc: "" },
  { id: "SF", keyword: "SF", desc: "" },
  { id: "스릴러", keyword: "스릴러", desc: "" },
  { id: "로맨스", keyword: "로맨스", desc: "" },
  { id: "공포", keyword: "공포", desc: "" },
  { id: "판타지", keyword: "판타지", desc: "" },
  { id: "가족", keyword: "가족", desc: "" },
  { id: "역사", keyword: "역사", desc: "" },
  { id: "음악", keyword: "음악", desc: "" },
  { id: "전쟁", keyword: "전쟁", desc: "" },
  { id: "TV", keyword: "TV", desc: "" },
  { id: "영화", keyword: "영화", desc: "" },
  { id: "Kids", keyword: "Kids", desc: "" },
  { id: "Sci-Fi & Fantasy", keyword: "Sci-Fi & Fantasy", desc: "" },
  { id: "Reality", keyword: "Reality", desc: "" },
  { id: "Action & Adventure", keyword: "Action & Adventure", desc: "" },
  { id: "Soap", keyword: "Soap", desc: "" },
  { id: "News", keyword: "News", desc: "" },
  { id: "War & Politics", keyword: "War & Politics", desc: "" },
  { id: "Talk", keyword: "Talk", desc: "" },
];
const categories = [
  {
    id: "MOVIE",
    type: "MOVIE",
    desc: "",
  },
  {
    id: "DRAMA",
    type: "DRAMA",
    desc: "",
  },
  {
    id: "ANIMATION",
    type: "ANIMATION",
    desc: "",
  },
];
const keywords = [
  {
    id: "based on novel or book",
    kor: "소설 및 책 기반",
    eng: "based on novel or book",
  },
  { id: "new york city", kor: "뉴욕 도시", eng: "new york city" },
  { id: "london, england", kor: "런던, 영국", eng: "london, england" },
  {
    id: "sibling relationship",
    kor: "형제 관계",
    eng: "sibling relationship",
  },
  { id: "competition", kor: "경쟁", eng: "competition" },
  { id: "high school", kor: "고등학교", eng: "high school" },
  { id: "romance", kor: "로맨스", eng: "romance" },
  { id: "police", kor: "경찰", eng: "police" },
  { id: "martial arts", kor: "무술", eng: "martial arts" },
  { id: "california", kor: "캘리포니아", eng: "california" },
  { id: "paris, france", kor: "파리, 프랑스", eng: "paris, france" },
  { id: "miniseries", kor: "미니 시리즈", eng: "miniseries" },
  { id: "prison", kor: "감옥", eng: "prison" },
  { id: "anthology", kor: "시집", eng: "anthology" },
  { id: "game show", kor: "게임 쇼", eng: "game show" },
  { id: "friendship", kor: "우정", eng: "friendship" },
  { id: "england", kor: "영국", eng: "england" },
  { id: "japan", kor: "일본", eng: "japan" },
  { id: "suicide", kor: "자살", eng: "suicide" },
  { id: "holiday", kor: "휴일", eng: "holiday" },
  {
    id: "chicago, illinois",
    kor: "시카고, 일리노이",
    eng: "chicago, illinois",
  },
  {
    id: "parent child relationship",
    kor: "부모 자식 관계",
    eng: "parent child relationship",
  },
  { id: "sketch comedy", kor: "소스케치 코미디", eng: "sketch comedy" },
  {
    id: "loss of loved one",
    kor: "사랑하는 사람의 상실",
    eng: "loss of loved one",
  },
  { id: "small town", kor: "작은 마을", eng: "small town" },
  { id: "sports", kor: "스포츠", eng: "sports" },
  { id: "love triangle", kor: "삼각 관계", eng: "love triangle" },
  { id: "stand-up comedy", kor: "스탠드업 코미디", eng: "stand-up comedy" },
  { id: "talk show", kor: "토크쇼", eng: "talk show" },
  { id: "australia", kor: "호주", eng: "australia" },
  { id: "hotel", kor: "호텔", eng: "hotel" },
  { id: "telenovela", kor: "텔레노벨라", keywoengrd: "telenovela" },
  { id: "spy", kor: "스파이", eng: "spy" },
  { id: "world war ii", kor: "제2차 세계 대전", eng: "world war ii" },
  { id: "variety show", kor: "버라이어티 쇼", eng: "variety show" },
  { id: "corruption", kor: "부패", eng: "corruption" },
  { id: "detective", kor: "형사", eng: "detective" },
  { id: "monster", kor: "괴물", eng: "monster" },
  { id: "superhero", kor: "슈퍼히어로", eng: "superhero" },
  {
    id: "san francisco, california",
    kor: "샌프란시스코, 캘리포니아",
    eng: "san francisco, california",
  },
  { id: "family", kor: "가족", eng: "family" },
  { id: "canada", kor: "캐나다", eng: "canada" },
  { id: "france", kor: "프랑스", eng: "france" },
  { id: "future", kor: "미래", eng: "future" },
  { id: "woman director", kor: "여성 감독", eng: "woman director" },
  { id: "cooking", kor: "요리", eng: "cooking" },
  { id: "journalist", kor: "기자", eng: "journalist" },
  { id: "musical", kor: "뮤지컬", eng: "musical" },
  { id: "politics", kor: "정치", eng: "politics" },
];

const TestPage = () => {
  const pageid = ["year", "genre", "category", "keyword"];
  const [result, setResult] = useState({}); // 선택한 모든 것 담기
  const [isChecked, setIsChecked] = useState(false);
  const [temp, setTemp] = useState(new Set()); // 한 페이지에서 선택한 것 받고 초기화
  const [page, setPage] = useState("year"); // 현재 보여질 페이지
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState(null);

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    handleCheck(target.id, target.checked);
  };

  const handleCheck = (id, isChecked) => {
    const temps = new Set(temp);
    if (isChecked) {
      temps.add(id);
      setTemp(temps);
    } else if (!isChecked && temp.has(id)) {
      temps.delete(id);
      setTemp(temps);
    }
  };

  const handleNone = () => {
    if (temp.size === 0) {
      handleLast();
      setResult({ ...result, [page]: [] });
      setPage(pageid[Number(pageid.indexOf(page) + 1)]);
    } else {
      alert('이미 고른 항목이 있습니다. "선택 완료"를 눌러주세요!');
    }
  };

  const handleDone = (e) => {
    if (temp.size === 0) {
      alert('선택할 항목이 없다면, "모르겠어요"를 눌러주세요.');
    } else {
      handleLast();
      setResult({ ...result, [page]: Array.from(temp) });
      setTemp(new Set());
      setPage(pageid[Number(pageid.indexOf(page) + 1)]);
    }
    setIsChecked(false);
  };

  const handleLast = () => {
    if (page === "keyword") {
      const last = { ...result };
      last["keyword"] = Array.from(temp);

      setTimeout(() => {
        axios
          .post("/contents/submit", { result: last })
          .then((response) => {
            // console.log(response);
            if (response.status === 200) {
              //   const info = response.data;
              if (response.data) {
                setResponseData(response.data);
                console.log(response.data);

                alert("성공적으로 매칭되었습니다!");
                navigate("/recommendlist", {
                  state: { result: last },
                });
              } else {
                console.log("데이저가 존재하지 않습니다.");
                alert("데이터 업슴");
              }
            } else {
              console.log("응답 상태 코드:", response.status);
              alert(
                "응답을 성공적으로 처리하지 못했습니다. 다시 시도해주세요."
              );
            }
          })
          .catch((err) => {
            console.log(err);
            alert("처리 중 문제가 발생했습니다. 다시 시도해주세요.");
            return navigate("/");
          });
      }, 1000);
    }
  };

  return (
    <>
      <div>
        <TestMainPage>
          {page === "year" && (
            <PageSection
              idname="year"
              dataset={years}
              main="time"
              sub="desc"
              onChange={(e) => checkHandler(e)}
            >
              본인이 선호하는 콘텐츠의 연도를 모두 선택해주세요.
            </PageSection>
          )}
          {page === "genre" && (
            <PageSection
              idname="genre"
              dataset={genres}
              main="keyword"
              sub="desc"
              isMulti={true}
              onChange={(e) => checkHandler(e)}
            >
              본인이 선호하는 콘텐츠의 장르를 모두 선택해주세요.
            </PageSection>
          )}
          {page === "category" && (
            <PageSection
              idname="category"
              dataset={categories}
              main="type"
              sub="desc"
              isMulti={true}
              onChange={(e) => checkHandler(e)}
            >
              본인이 선호하는 콘텐츠(영상 종류)를 선택해주세요.
            </PageSection>
          )}
          {page === "keyword" && (
            <PageSection
              idname="keyword"
              dataset={keywords}
              main="kor"
              sub="eng"
              isMulti={true}
              onChange={(e) => checkHandler(e)}
            >
              본인이 선호하는 키워드를 모두 선택해주세요.
            </PageSection>
          )}
          {page === undefined && <Loading />}
          {page !== undefined && (
            <div className="buttons">
              <Button
                //   styles={`btn-md ${temp.size === 0 && `btn-red`}`}
                onClick={handleNone}
              >
                모르겠어요
              </Button>
              <div style={{ margin: "auto 0" }}>
                {pageid.indexOf(page) + 1} / 4
              </div>
              <Button
                //   styles={`btn-md ${temp.size !== 0 && `btn-green`}`}
                onClick={handleDone}
              >
                선택 완료
              </Button>
            </div>
          )}
        </TestMainPage>
        {/* {responseData && <RecommendList data={responseData} />} */}
      </div>
    </>
  );
};
export default TestPage;
