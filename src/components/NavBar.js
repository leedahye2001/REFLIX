import { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/RE_FLIX.png";

const NavBar = () => {
  // const [loginToggle, setLoginToggle] = useState(false);
  // const clickedToggle = () => {
  //   setLoginToggle((prev) => !prev);
  // };

  return (
    <nav className="px-20 py-5 bg-black border-gray-200 px-3 sm:px-7">
      <div className="container flex flex-wrap justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="w-6 sm:w-10" alt="REFLIX Logo" />
        </Link>
        <div class="flex md:order-2">
          <a href="/login">
            <button
              type="button"
              className="text-black bg-white border-2 border-white hover:bg-black hover:text-white hover:border-2
                        font-semibold rounded-full text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center"
            >
              로그인
            </button>
          </a>
          {/* <button onClick={clickedToggle}>회원가입</button> */}
          {/* <button onClick={() => loginToggle(!signupToggle)}>
              {signupToggle ? (
               
              ) : (
                <button
                  type="button"
                  className="text-black bg-white border-2 border-white hover:bg-black hover:text-white hover:border-2
                        font-semibold rounded-full text-sm sm:px-5 sm:py-2.5 px-4 py-2 text-center"
                >
                  회원가입
                </button>
              )}
            </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
