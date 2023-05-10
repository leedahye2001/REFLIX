import { Link } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  padding-top: 20px;
  justify-items: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-top: 10px;
  background-color: #3a3a3a;
  border-radius: 5px;

  @media (max-width: 767px) {
    width: 80%;
  }
`;

const SearchBar = styled.input`
  border: none;
  margin: 20px 20px 20px 20px;
  border-radius: 5px;
  font-size: 17px;
  width: 80%;
  background-color: #3a3a3a;
  :focus {
    outline: none;
    color: white;
  }
`;

const CardContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  padding: 10px;
  margin: 10px 0 10px 0;
  transition: all ease 0.2s;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const Info = styled.span`
  font-size: 14px;
  font-weight: 200;
  color: #98a4b7;
`;
// const StyledLink = styled(Link)`
//   display: block;
//   text-decoration: none;
//   color: white;
//   display: flex;

//   width: 50%;
//   justify-content: flex-start;
//   padding: 10px;
//   margin: 10px 0 10px 0;
//   transition: all ease 0.2s;
//   border-radius: 10px;
//   /* background-color: #3a3a3a; */
//   :hover {
//     transform: scale(1.03);
//     box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
//   }

//   img {
//     background-color: #3a3a3a;
//     width: 70px;
//     border-radius: 3px;
//   }
//   @media (max-width: 767px) {
//     width: 80%;
//   }
// `;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  display: flex;

  width: 50%;
  justify-content: flex-start;
  padding: 10px;
  margin: 10px 0 10px 0;
  transition: all ease 0.2s;
  border-radius: 10px;
  /* background-color: #3a3a3a; */
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.8);
  }

  img {
    background-color: #3a3a3a;
    width: 70px;
    border-radius: 3px;
  }
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export {
  MainWrapper,
  ContentWrapper,
  SearchBarWrapper,
  SearchBar,
  CardContainer,
  UserInfo,
  Title,
  Info,
  StyledLink,
};
