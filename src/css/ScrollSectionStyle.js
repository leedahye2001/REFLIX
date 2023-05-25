import styled from "styled-components";

const ScrollSection = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: background 0.5s ease-in-out, color 0.5s ease-in-out;
`;

export { ScrollSection };
