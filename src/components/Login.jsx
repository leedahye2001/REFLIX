import { useState } from "react";
import { Link } from "react-router-dom";
import loginBG from "../assets/images/kids.mp4";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // const onSubmitHandler = (event) => {
  //   // 버튼만 누르면 리로드 되는것을 막아줌
  //   event.preventDefault();

  //   console.log("Email", Email);
  //   console.log("Password", Password);

  //   let body = {
  //     email: Email,
  //     password: Password,
  //   };

  //   dispatch(loginUser(body));
  // };

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
        top-[20%]
        ml-[25%]
        mr-[25%]"
      >
        <br />
        <p className="font-bold text-[#F57B00] text-4xl sm:text-5xl">LOGIN</p>
        <br />

        {/* 이메일 */}
        <div class="relative mb-4 sm:mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
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
            id={Email}
            onChange={onEmailHandler}
            class="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md 
                    focus:ring-orange-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
            placeholder="Email"
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
            id={Password}
            onChange={onPasswordHandler}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md
                    focus:ring-blue-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
            placeholder="Password"
            required
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          type="button"
          formAction=""
          className="mt-[30px] w-[345px] sm:w-[500px] text-white bg-[#F57B00] sm:bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-md sm:text-xl px-10 py-3 sm:py-4 text-center"
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
          <label
            for="default-checkbox"
            class="ml-2 text-sm sm:text-base text-white"
          >
            로그인 정보 저장
          </label>
        </div>

        {/* 비번 분실 */}
        <Link to="/lost" className="ml-[105px] sm:ml-[170px]">
          <span className="text-[#F57B00] hover:text-orange-700 font-semibold text-sm sm:text-base">
            비밀번호를 잊으셨나요?
          </span>
        </Link>

        {/* 회원가입 */}
        <div className="pt-4 sm:pt-6 flex items-center text-sm sm:text-base ml-[40px] sm:ml-[100px] md:ml-[78px] lg:ml-[85px] xl:ml-[90px]">
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
