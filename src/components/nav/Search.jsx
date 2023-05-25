import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchBar, SearchBarWrapper } from "../../css/Search";
import {
  CardContainer,
  Info,
  StyledWrapper,
  Title,
  UserInfo,
} from "../../css/SearchResult";

const ContentList = ({ contents, handleCardClick }) => {
  if (!contents) return null;

  return contents.map((content) => {
    return (
      <StyledWrapper
        key={content.contentsId}
        onClick={() =>
          handleCardClick(
            content.contentsId,
            content.contentsCategory,
            content.name
          )
        }
      >
        <CardContainer>
          <img src={content.imageUrl} alt="content poster" />
          <UserInfo>
            <Title>{content.name}</Title>
            <Info>
              {content.contentsCategory} · {content.year}
            </Info>
          </UserInfo>
        </CardContainer>
      </StyledWrapper>
    );
  });
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [contents, setContents] = useState(null);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    navigate("/search");
  };

  const handleCardClick = (contentId, category, name) => {
    setContents(null); // 컨텐츠를 null로 설정하여 ContentList를 사라지게 함
    navigate(`/contents/detail/${contentId}/${category}?contentname=${name}`);
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
          console.log(list);
          setContents(list);
        })
        .catch((err) => console.error(err));
    };
    if (search) getItems();
  }, [search]);

  return (
    <>
      <SearchBarWrapper onClick={handleClick}>
        <IoSearch size="40" color="#B0B0B0" style={{ padding: 10 }} />
        <SearchBar
          type="search"
          placeholder="검색을 원하시면 여기를 눌러주세요."
          onChange={handleInputChange}
        />
      </SearchBarWrapper>
      {contents && (
        <ContentList contents={contents} handleCardClick={handleCardClick} />
      )}
    </>
  );
};

export default Search;
