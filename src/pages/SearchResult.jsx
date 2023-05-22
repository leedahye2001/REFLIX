// import { useNavigate } from "react-router-dom";
// import ContentList from "../components/nav/Search";
// import { useEffect, useState } from "react";
// import { IoSearch } from "react-icons/io5";
// import { Background } from "../css/Background";
// import NoContentDetail from "../components/content/NoContentDetail";
// import {
//   CardContainer,
//   ContentWrapper,
//   Info,
//   MainWrapper,
//   StyledLink,
//   Title,
//   UserInfo,
// } from "../css/SearchResult";
// import { SearchBar, SearchBarWrapper } from "../css/Search";
// import Search from "../components/nav/Search";

// const SearchResult = () => {
//   const [search, setSearch] = useState("");
//   const [contents, setContents] = useState(null);
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/search");
//   };

//   const handleInputChange = (e) => {
//     setSearch(e.target.value);
//   };
//   const handleSearch = (value) => {
//     setSearch(value);
//   };

//   useEffect(() => {
//     const getSearchContent = async () => {
//       return await fetch(`/contents/search?q=${search}`)
//         .then((res) => {
//           if (!res.ok) {
//             return new Promise.reject("no found");
//           }
//           return res.json();
//         })
//         .then((list) => {
//           setContents(list);
//         })
//         .catch((err) => console.error(err));
//     };
//     if (search) getSearchContent();
//   }, [search]);

//   return (
//     <div>
//       <Background />
//       <div
//         className="text-center flex-cols z-1
//         absolute
//         top-[15%]
//         left-[50%]
//         -translate-x-1/2"
//       >
//         <Search onSearch={handleSearch} />
//         <ContentWrapper>
//           {search ? <ContentList contents={contents} /> : <NoContentDetail />}
//         </ContentWrapper>
//       </div>
//     </div>
//   );
// };

// export default SearchResult;

import { useNavigate } from "react-router-dom";
import ContentList from "../components/nav/Search";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Background } from "../css/Background";
import NoContentDetail from "../components/content/NoContentDetail";
import {
  CardContainer,
  ContentWrapper,
  Info,
  MainWrapper,
  StyledLink,
  Title,
  UserInfo,
} from "../css/SearchResult";
import { SearchBar, SearchBarWrapper } from "../css/Search";
import Search from "../components/nav/Search";

// const ContentList = ({ contents }) => {
//   const [clicked, setClicked] = useState();
//   const handleCardClick = (id) => {
//     setClicked(contents.find((el) => el.id === id));
//   };

//   if (!contents) return;
//   return contents.map((content) => {
//     return (
//       <StyledLink
//       // to={{
//       //   pathname: `/contents/detail/?${
//       //     content.contentId
//       //   }&${content.category.toLowerCase()}`,
//       // }}
//       >
//         <CardContainer
//           key={content.contentsId}
//           onClick={() => handleCardClick(content.id)}
//         >
//           <img src={content.contentImageUrl} alt="content poster" />
//           <UserInfo>
//             <Title>{content.contentName}</Title>
//             <Info>
//               {content.media_type} · {content.year}
//             </Info>
//           </UserInfo>
//           {/* {clicked && <DetailPage clicked={clicked} setClicked={setClicked} />} */}
//         </CardContainer>
//       </StyledLink>
//     );
//   });
// };

const SearchResult = ({ contents }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Background />
      <div
        className="text-center flex-cols z-1
        absolute
        top-[15%]
        left-[50%]
        -translate-x-1/2"
      >
        <ContentWrapper>
          {search ? <ContentList contents={contents} /> : <NoContentDetail />}
          {/* <ContentList contents={contents} /> */}
        </ContentWrapper>
      </div>
    </div>
  );
};

export default SearchResult;
