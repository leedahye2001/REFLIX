import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #3a3a3a;
  border-width: 2px;
  border-radius: 15px;

  @media (max-width: 767px) {
    width: 75%;
  }
`;

const SearchBar = styled.input`
  border: none;
  margin: 10px 20px 10px 20px;
  border-radius: 5px;
  font-size: 17px;
  width: 80%;
  background-color: #3a3a3a;
  :focus {
    outline: none;
    color: white;
  }
`;

const Search = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };

  const [search, setSearch] = useState("");
  const [contents, setContents] = useState(null);

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

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

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
    </>
  );
};

export default Search;
