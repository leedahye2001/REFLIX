import { useContext, useState } from "react";
import { loginUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import loginBG from "../assets/images/kids.mp4";
import { UserDispatchContext } from "../context/context";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    loginUser(id, password).then((response) => {
      const user = response;
      console.log(response);

      if (response.tokens.access_token) {
        localStorage.setItem("token", response.tokens.access_token);
      }

      dispatch({
        type: "LOGIN",
        payload: {
          id: user.id,
          email: user.email,
        },
      });

      setTimeout(() => {}, 500);

      window.alert("성공적으로 로그인 되었습니다 !");
      navigate("/");
    });
  };

  const handleIdInput = (e) => {
    setId(e.target.value);
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
    <div className="flex grid items-center">
      <div className="relative bg-black justify-center align-center">
        <video
          src={loginBG}
          className="opacity-30 laptop:visible w-full h-[752px] object-cover"
          autoPlay
          loop
          muted
          playbackRate="0.8"
        />
      </div>
      <div
        className="text-center flex-cols z-1
        absolute
        top-[25%]
        left-[50%]
        -translate-x-1/2"
      >
        <br />
        <p className="flex font-bold text-[#F57B00] text-5xl">LOGIN</p>
        <br />

        {/* 이메일 */}
        <div class="relative mb-4">
          <div class="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-400"
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
            id="id"
            name="id"
            onChange={handleIdInput}
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-md 
                    focus:ring-orange-500 focus:border-blue-500 block w-[345px] h-[45px] p-3 pl-[50px]"
            placeholder="Email"
            required
          />
        </div>

        {/* 비밀번호 입력 */}
        <div class="relative mb-4 sm:mb-5">
          <div class="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
                    focus:ring-blue-500 focus:border-blue-500 block w-[345px] p-3 pl-[50px]"
            placeholder="Password"
            required
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          type="button"
          onClick={handleLogin}
          className="mt-[30px] w-[345px] text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-md px-10 py-3 text-center"
        >
          로그인
        </button>

        {/* 로그인 정보 저장 */}
        <div class="pt-4 flex items-center mb-10 sm:mb-10">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 bg-gray-100 rounded-md border-gray-300 focus:ring-blue-500 focus:ring-2 "
          />
          <label for="default-checkbox" class="ml-2 text-sm text-white">
            로그인 정보 저장
          </label>
        </div>

        {/* 비번 분실 */}
        <Link to="/lost" className="">
          <span className="text-[#F57B00] hover:text-orange-700 font-semibold text-sm">
            비밀번호를 잊으셨나요?
          </span>
        </Link>

        {/* 회원가입 */}
        <div className="pt-4 flex items-center text-sm ml-[40px]">
          <p className="text-white">아직 RE:FLIX 회원이 아니신가요?</p>
          <Link
            to="/signup"
            className="ml-4 font-semibold text-[#F57B00] hover:text-orange-700"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
