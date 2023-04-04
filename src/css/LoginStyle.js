import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 20px;

  span:nth-child(1) {
    display: flex;
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
  span:nth-child(2) {
    display: flex;
    margin-bottom: 5px;
    font-size: 12px;
    color: ${(props) => (props.isChecked ? "white" : "#ff0000")};
  }
  input {
    background-color: white;
    border-color: #afafaf;
    color: black;
    font-weight: 300;
    font-size: 15px;
    border-radius: 0.375rem;
    width: 400px;
    height: 40px;
    padding: 6px 6px 6px 50px;
    display: block;
    :focus {
      outline: none;
    }
  }
`;

const InputIdWrapper = styled.div`
  display: flex;
  button {
    border: 0px;
    text-align: end;
    margin-block: auto;
    color: ${(props) => (props.idChecked ? "white" : "#ff0000")};
    font-size: 12px;
    background-color: #ffff;
    cursor: pointer;
    :focus {
      outline: none;
      border-bottom: 1px solid;
    }
    :disabled {
      cursor: default !important;
    }
  }
`;

const Block = styled.section`
  margin-bottom: 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const VideoWrapper = styled.div`
  position: relative;
  background-color: black;
  justify-content: center;
  align-items: center;

  video {
    opacity: 30%;
    width: 100%;
    height: 752px;
    object-fit: cover;
    @media (min-width: 1024px) {
      visibility: visible;
    }
  }
`;

const LoginWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);

  h1 {
    display: flex;
    font-weight: bold;
    color: #f57b00;
    font-size: 3rem;
  }
  p {
    color: white;
  }
`;

const LoginButton = styled.button`
  margin-top: 30px;
  width: 400px;
  color: white;
  background-color: #f57b00;
  font-weight: 600;
  border-radius: 0.375rem;
  font-size: 1rem;
  padding: 16px 40px 16px 40px;
  text-align: center;
  :hover {
    background-color: rgb(194 65 12);
  }
`;

const LostPassword = styled.div`
  padding-top: 30px;
  span {
    color: #f57b00;
    :hover {
      color: rgb(194 65 12);
    }
    font-weight: 600;
    font-size: 14px;
  }
`;

const Account = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;

  p {
    color: white;
  }
`;

export {
  LostPassword,
  InputWrapper,
  InputIdWrapper,
  Block,
  MainWrapper,
  VideoWrapper,
  LoginWrapper,
  LoginButton,
  Account,
};
