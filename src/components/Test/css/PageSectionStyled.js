import styled from "styled-components";

const MainTitle = styled.div`
  color: #f57b00;
  font-size: 40px;
  font-weight: 700;
  line-height: 70px;
  /* span {
    color: $selected-color;
  } */
`;

const GenreBox = styled.div`
  width: 70%;
  margin: 1rem auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export { MainTitle, GenreBox };
