import { Component } from "react";
import { Link } from "react-router-dom";
import loginBG from "../assets/images/kids.mp4";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="bg-black">
          <video
            src={loginBG}
            className="opacity-30 sm:visible w-full h-[752px] object-cover"
            autoPlay
            loop
            muted
            playbackRate="0.8"
          />
        </div>
        <div className="border-white absolute top-[100px] sm:top-[120px] px-[23px] sm:px-[10%] md:px-[25%] xl:px-[35%] w-full h-2/3 items-center align-middle">
          <br />
          <p className="font-bold text-[#F57B00] text-4xl sm:text-5xl">
            SIGN UP
          </p>
          <br />

          {/* email */}
          <div class="relative mb-4 sm:mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <input
              type="text"
              id="email"
              class="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md 
                    focus:ring-orange-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
              placeholder="이메일을 입력하세요."
            />
          </div>

          {/* name */}
          <div class="relative mb-4 sm:mb-6">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="name"
              class="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md 
                    focus:ring-orange-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
              placeholder="이름을 입력하세요."
            />
          </div>

          {/* phone */}
          <div class="relative mb-4 sm:mb-6">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <input
              type="tel"
              id="phone"
              class="bg-white border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md 
                    focus:ring-orange-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
              placeholder="전화번호를 입력하세요."
            />
          </div>

          {/* password */}
          <div class="relative mb-4 sm:mb-6">
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md
                    focus:ring-blue-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
              placeholder="비밀번호를 입력하세요."
              required
            />
          </div>

          {/* confirm password */}
          <div class="relative mb-4 sm:mb-6">
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base rounded-md
                    focus:ring-blue-500 focus:border-blue-500 block w-[345px] sm:w-[500px] h-[45px] sm:h-[50px] p-3 pl-[50px]"
              placeholder="비밀번호 확인"
              required
            />
          </div>

          <button
            type="button"
            className="mt-[30px] w-[345px] sm:w-[500px] text-white bg-[#F57B00] sm:bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-md sm:text-xl px-10 py-4 text-center"
          >
            가입하기
          </button>

          <div className="pt-4 sm:pt-6 flex items-center text-sm sm:text-base ml-[65px] sm:ml-[125px]">
            <p className="text-white">이미 계정이 있으신가요?</p>
            <Link
              to="/login"
              className="ml-4 font-semibold text-[#F57B00] hover:text-orange-700"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
