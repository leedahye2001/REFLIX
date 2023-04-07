import styled from "styled-components";

const ScrollSection = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
  /* :hover {
    background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    );
  } */
`;

export { ScrollSection };
