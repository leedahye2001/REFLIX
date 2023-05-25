import { useState } from "react";
import { loginUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import loginBG from "../assets/images/kids.mp4";
import { useUserState, useUserDispatch } from "../context/context";
import {
  Account,
  Block,
  InputWrapper,
  MainWrapper,
  VideoWrapper,
} from "../css/SignUpStyle";
import { LoginButton, LoginWrapper, LostPassword } from "../css/LoginStyle";
import axios from "axios";

const Login = () => {
  const { userList } = useUserState();
  const dispatch = useUserDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" && password === "") {
      return alert("이메일 또는 패스워드를 입력해주세요.");
    }
    if (email === "") {
      return alert("이메일을 입력해주세요.");
    }
    if (password === "") {
      return alert("패스워드를 입력해주세요.");
    }

    axios
      .post(
        "/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer- ${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("access-token", token);
        console.log(response);
        dispatch({
          type: "LOGIN",
          userId: email,
          userPw: password,
        });
        if (response.status === 200) {
          alert("성공적으로 로그인 되었습니다 !");
          return navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        return navigate("/login");
      });
  };

  const handleIdInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePwInput = (e) => {
    setPassword(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <MainWrapper>
      <VideoWrapper>
        <video src={loginBG} autoPlay loop muted />
      </VideoWrapper>

      <LoginWrapper>
        <br />
        <h1>LOGIN</h1>
        <br />

        <Block>
          {/* 이메일 */}
          <InputWrapper>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleIdInput}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md 
                    block focus:outline-0 w-[345px] h-[45px] p-3 pl-[50px]"
                placeholder="Email"
                required
              />
            </div>
          </InputWrapper>

          {/* 비밀번호 입력 */}
          <InputWrapper>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                onKeyDown={handleEnter}
                onChange={handlePwInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
                    focus:outline-0 block w-[345px] p-3 pl-[50px]"
                placeholder="Password"
                required
              />
            </div>
          </InputWrapper>
        </Block>

        {/* 로그인 버튼 */}
        <LoginButton onClick={handleLogin}>로그인</LoginButton>

        {/* 비번 분실 */}
        <LostPassword>
          <Link to="/lost">
            <span>비밀번호를 잊으셨나요?</span>
          </Link>
        </LostPassword>

        {/* 회원가입 */}
        <Account>
          <p>아직 RE:FLIX 회원이 아니신가요?</p>
          <Link
            to="/signup"
            className="ml-2 font-semibold text-[#F57B00] hover:text-orange-700"
          >
            회원가입
          </Link>
        </Account>
      </LoginWrapper>
    </MainWrapper>
  );
};

export default Login;
