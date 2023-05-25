import { useNavigate } from "react-router-dom";
// import ContentList from "../components/nav/Search";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Background } from "../css/Background";
import NoContentDetail from "../components/content/NoContentDetail";
import {
  CardContainer,
  ContentWrapper,
  Info,
  StyledWrapper,
  Title,
  UserInfo,
} from "../css/SearchResult";
import { SearchResultBar, SearchBarResultWrapper } from "../css/Search";
import { TestMainPage } from "../components/Test/css/TestPageStyled";
import Search from "../components/nav/Search";
import SearchList from "./SearchList";

// const ContentList = ({ contents }) => {
//   const [clicked, setClicked] = useState();
//   const navigate = useNavigate();

//   const handleCardClick = (contentId, category, name) => {
//     navigate(`/contents/detail/${contentId}/${category}?contentname=${name}`);
//   };

//   if (!contents) return;

//   return contents.map((content) => {
//     return (
//       <StyledWrapper
//         key={content.contentsId}
//         onClick={() =>
//           handleCardClick(
//             content.contentsId,
//             content.contentsCategory,
//             content.name
//           )
//         }
//       >
//         <CardContainer>
//           <img src={content.imageUrl} alt="content poster" />
//           <UserInfo>
//             <Title>{content.name}</Title>
//             <Info>
//               {content.contentsCategory} · {content.year}
//             </Info>
//           </UserInfo>
//         </CardContainer>
//       </StyledWrapper>
//     );
//   });
// };

// const SearchNew = () => {
//   const [search, setSearch] = useState("");
//   const [contents, setContents] = useState(null);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/search");
//   };

//   const handleInputChange = (e) => {
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     const getItems = async () => {
//       return await fetch(`/contents/search?q=${search}`)
//         .then((res) => {
//           if (!res.ok) {
//             return new Promise.reject("no found");
//           }
//           return res.json();
//         })
//         .then((list) => {
//           console.log(list);
//           setContents(list);
//         })
//         .catch((err) => console.error(err));
//     };
//     if (search) getItems();
//   }, [search]);

//   return (
//     <>
//       <SearchBarResultWrapper onClick={handleClick}>
//         <IoSearch size="40" color="#B0B0B0" style={{ padding: 10 }} />
//         <SearchResultBar
//           type="search"
//           placeholder="콘텐츠 제목을 입력하세요."
//           onChange={handleInputChange}
//         />
//       </SearchBarResultWrapper>
//       <ContentWrapper>
//         {/* {contents ? <ContentList contents={contents} /> : <NoContentDetail />} */}
//       </ContentWrapper>
//     </>
//   );
// };

// const SearchResult = () => {
//   return (
//     <div>
//       <TestMainPage>
//         <Search />
//       </TestMainPage>
//     </div>
//   );
// };
const SearchResult = () => {
  return (
    <div>
      <Background />
    </div>
  );
};

export default SearchResult;
