import {
  Component,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/images/reflex_logo_trans.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useUserDispatch, useUserState } from "../../context/context";
import Search from "./Search";
import { NavButton, NavMenu } from "../../css/Header";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { user } = useUserState();
  const dispatch = useUserDispatch();

  useLayoutEffect(() => {
    setIsButtonClicked(false);
  }, [location.pathname]);

  const handleLogout = () => {
    const logoutconfirm = window.confirm("로그아웃 하시겠습니까?");
    if (logoutconfirm) {
      localStorage.removeItem("access-token");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  // const [search, setSearch] = useState("");
  // const [contents, setContents] = useState(null);
  // const handleSearch = (value) => {
  //   setSearch(value);
  // };

  // useEffect(() => {
  //   const getSearchContent = async () => {
  //     return await fetch(`/contents/search?q=${search}`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           return new Promise.reject("no found");
  //         }
  //         return res.json();
  //       })
  //       .then((list) => {
  //         setContents(list);
  //       })
  //       .catch((err) => console.error(err));
  //   };
  //   if (search) getSearchContent();
  // }, [search]);

  return (
    <nav className="sticky z-10 top-0 px-20 py-5 bg-black border-gray-200 px-8 laptop:px-7">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="w-[40px]" alt="REFLIX Logo" />
        </Link>

        <Search />

        <NavButton
          onClick={() => {
            setIsButtonClicked((prev) => !prev);
          }}
        >
          <AiOutlineMenu style={{}} />
        </NavButton>
        <NavMenu isButtonClicked={isButtonClicked}>
          {user ? (
            <>
              <p>{user.userId}님</p>
              <li onClick={() => handleLogout()}> 로그아웃</li>
              <li onClick={() => handleNavigate("/mypage/:id")}>마이페이지</li>
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

export default Header;
