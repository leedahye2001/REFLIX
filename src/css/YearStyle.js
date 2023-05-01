import styled from "styled-components";

const YearWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    display: flex;
    font-weight: bold;
    color: #f57b00;
    font-size: 2rem;
  }
`;

export { YearWrapper };
