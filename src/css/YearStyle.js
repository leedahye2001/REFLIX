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

const Block = styled.div`
  margin: 20px 0 20px 0;
  background: #303030;
  /* padding: 20px 0 20px 0; */
  color: white;
  display: grid;
  border-radius: 5px;
`;

const YearContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  border-radius: 5px;
  justify-content: center;
  background-color: #303030;
  border: white;
  border-radius: 5px;
  height: 300px;
  
  h2 {
    display: grid;
    font-size: 16px;
    justify-content: center;
    align-items: center;
  }
`;

export { YearWrapper, YearContent, Block };
