// import { IoSearch } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { SearchBar, SearchBarWrapper } from "../../css/Search";
// import {
//   CardContainer,
//   ContentWrapper,
//   Info,
//   StyledLink,
//   Title,
//   UserInfo,
// } from "../../css/SearchResult";
// import NoContentDetail from "../content/NoContentDetail";

// const ContentList = ({ contents }) => {
//   const [clicked, setClicked] = useState();
//   const handleCardClick = (id) => {
//     setClicked(contents.find((el) => el.id === id));
//   };

//   if (!contents) {
//     return <div>로딩 중 ...</div>;
//   }

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

// const Search = ({ onSearch }) => {
//   const [search, setSearch] = useState("");

//   // const [contents, setContents] = useState(null);
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/search");
//   };

//   const handleInputChange = (e) => {
//     setSearch(e.target.value);
//   };

//   useEffect(() => {
//     onSearch(search);
//   }, [search, onSearch]);

//   return (
//     <>
//       <SearchBarWrapper onClick={() => handleClick()}>
//         <IoSearch size="40" color="#B0B0B0" style={{ padding: 10 }} />
//         <SearchBar
//           type="search"
//           placeholder="찾고자 하는 컨텐츠를 검색하세요."
//           onChange={handleInputChange}
//         />
//       </SearchBarWrapper>
//       {/* <ContentWrapper>
//         {search ? <ContentList contents={contents} /> : <NoContentDetail />}
//       </ContentWrapper> */}
//     </>
//   );
// };

// export default Search;

import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchBar, SearchBarWrapper } from "../../css/Search";
import {
  CardContainer,
  ContentWrapper,
  Info,
  StyledLink,
  Title,
  UserInfo,
} from "../../css/SearchResult";
import NoContentDetail from "../content/NoContentDetail";

const ContentList = ({ contents }) => {
  const [clicked, setClicked] = useState();
  const handleCardClick = (id) => {
    setClicked(contents.find((el) => el.id === id));
  };

  if (!contents) return;

  return contents.map((content) => {
    return (
      <StyledLink
        to={{
          pathname: `/contents/detail/?${content.contentId}`,
        }}
      >
        <CardContainer
          key={content.contentsId}
          onClick={() => handleCardClick(content.id)}
        >
          <img src={content.contentImageUrl} alt="content poster" />
          <UserInfo>
            <Title>{content.contentName}</Title>
            <Info>
              {content.contentsCategory} · {content.year}
            </Info>
          </UserInfo>
          {/* {clicked && <DetailPage clicked={clicked} setClicked={setClicked} />} */}
        </CardContainer>
      </StyledLink>
    );
  });
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getItems = async () => {
      return await fetch(`/contents/search?q=${search}`)
        .then((res) => {
          if (!res.ok) {
            return new Promise.reject("no found");
          }
          return res.json();
        })
        .then((list) => {
          setContents(list);
        })
        .catch((err) => console.error(err));
    };
    if (search) getItems();
  }, [search]);

  return (
    <>
      <SearchBarWrapper onClick={() => handleClick()}>
        <IoSearch size="40" color="#B0B0B0" style={{ padding: 10 }} />
        <SearchBar
          type="search"
          placeholder="찾고자 하는 컨텐츠를 검색하세요."
          onChange={handleInputChange}
        />
      </SearchBarWrapper>
      <ContentWrapper>
        {search ? <ContentList contents={contents} /> : ""}
      </ContentWrapper>
    </>
  );
};

export default Search;
