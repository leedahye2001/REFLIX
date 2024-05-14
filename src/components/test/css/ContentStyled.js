import styled from "styled-components";

const ContentInput = styled.input`
  display: none;
  &:checked + label {
    box-shadow: 0 0 0 3px #f57b00 inset;
    transition: 0.5s ease;
  }
`;

const ContentLabel = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80px;
  border: none;
  background-color: #303030;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 1rem 1.5rem;

  h1 {
    font-weight: 700;
  }
  p {
    color: #efede8;
    font-size: 0.7rem;
    margin-top: 0.2rem;
  }
`;

const Multi = styled.label`
  width: 30%;
`;

const Content = styled.div`
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

export { ContentInput, Multi, ContentLabel, Content };
