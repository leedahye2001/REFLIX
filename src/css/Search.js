import styled from "styled-components";

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #3a3a3a;
  border-radius: 15px;

  @media (max-width: 767px) {
    width: 60%;
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

const SearchBarResultWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  background-color: #3a3a3a;
  border-radius: 15px;

  @media (max-width: 767px) {
    width: 70%;
  }
`;

const SearchResultBar = styled.input`
  border: none;
  margin: 10px 20px 10px 20px;
  border-radius: 5px;
  font-size: 17px;
  width: 100%;
  background-color: #3a3a3a;
  :focus {
    outline: none;
    color: white;
  }
`;

export { SearchBarWrapper, SearchBar, SearchBarResultWrapper, SearchResultBar };
