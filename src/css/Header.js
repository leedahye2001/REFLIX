import styled from "styled-components";

const NavButton = styled.button`
  @media (max-width: 690px) {
    margin-left: 10px;
    border: none;
    padding-top: 5px;
    background-color: transparent;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }

  @media (min-width: 691px) and (max-width: 890px) {
    margin-left: 80px;
    border: none;
    padding-top: 5px;
    background-color: transparent;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }

  @media (min-width: 891px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  @media (max-width: 890px) {
    position: absolute;
    display: flex;
    display: ${(props) => (props.isButtonClicked ? "flex" : "none")};
    top: 85px;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: black;
    opacity: 0.7;
    list-style: none;
    cursor: pointer;
    font-size: 15px;
    padding: 0;
    z-index: 1;
    p {
      font-size: 16px;
      color: white;
    }
    li {
      display: flex;
      font-size: 16px;
      font-weight: 500;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      color: white;
      padding: 20px 0 20px 0;
      width: 100%;
      :hover {
        background-color: antiquewhite;
        color: black;
      }
    }
  }

  @media (min-width: 891px) {
    display: flex;
    list-style: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    p {
      font-size: 16px;
      color: white;
    }
    li:nth-child(odd) {
      color: black;
      background-color: white;
      border-width: 2px;
      border-radius: 9999px;
      font-size: 16px;
      font-weight: 500;
      padding: 12px 16px 12px 16px;
      margin: 0 6px 0 6px;
      :hover {
        background-color: black;
        color: white;
      }
    }
    li:nth-child(2n) {
      margin: 0 10px 0 10px;
      /* padding: 6px; */
      color: white;
      width: max-content;
      :hover {
        color: #f57b00;
      }
    }
  }
`;

export { NavButton, NavMenu };
