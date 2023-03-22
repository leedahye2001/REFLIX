import {
  Component,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/reflex_logo_trans.png";
import { AiOutlineMenu } from "react-icons/ai";
import { UserContext, UserDispatchContext } from "../../context/context";

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

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const user = useContext(UserContext);
  const dispatch = useContext(UserDispatchContext);

  const handleLogout = () => {
    const logoutconfirm = window.confirm("로그아웃 하시겠습니까?");
    if (logoutconfirm) {
      localStorage.removeItem("token");
      // localStorage.removeItem("refreshToken");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  useLayoutEffect(() => {
    setIsButtonClicked(false);
  }, [location.pathname]);

  return (
    <nav className="px-20 py-5 bg-black border-gray-200 px-8 laptop:px-7">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="w-[40px]" alt="REFLIX Logo" />
        </Link>
        <NavButton
          onClick={() => {
            setIsButtonClicked((prev) => !prev);
          }}
        >
          <AiOutlineMenu style={{}} />
        </NavButton>
        <NavMenu isButtonClicked={isButtonClicked}>
          {user?.id !== "" ? (
            <>
              <li onClick={() => handleLogout()}> 로그아웃</li>
              <li onClick={() => handleNavigate("/mypage")}>마이페이지</li>
            </>
          ) : (
            <>
              <li onClick={() => handleNavigate("/login")}>로그인</li>
              <li onClick={() => handleNavigate("/signup")}>회원가입</li>
            </>
          )}
        </NavMenu>
      </div>
    </nav>
  );
};

export default NavBar;
