import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { updateUser } from "../apis/user";
import { useUserDispatch, useUserState } from "../context/context";
import axios from "axios";
import { Background } from "../css/Background";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const [message, setMessage] = useState("");
  const { user } = useUserState();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [usePwCheck, setUsePwCheck] = useState("");

  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
  const nameRegExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]{0,10}$/;
  const pwChecked = pwRegExp.test(password) || password.trim() === "";
  const pwCheckChecked = password === usePwCheck || usePwCheck.trim() === "";
  const nameChecked = nameRegExp.test(name) || name.trim() === "";

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };
  const handlePwCheck = (e) => {
    setUsePwCheck(e.target.value);
  };

  const handleUpdate = () => {
    if (!nameChecked || !pwChecked) {
      return alert("이름 또는 패스워드를 확인해주세요.");
    }
    if (password !== usePwCheck) {
      return alert("동일한 패스워드를 입력해주세요.");
    }
    if (name === "" || !nameChecked) {
      return alert("이름을 확인해주세요.");
    }

    axios
      .post("/user/update", {
        name: name,
        password: password,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "UPDATE_USER",
          user: {
            password,
            name,
          },
        });
        alert("회원정보가 변겅되었습니다.");
        if ((response.status = 200)) {
          return navigate("/");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="flex grid items-center">
      <Background />
      <div
        className="text-center flex-cols z-1
        absolute
        top-[15%]
        left-[50%]
        -translate-x-1/2"
      >
        <br />
        <p className="flex justify-center font-bold text-[#F57B00] text-5xl">
          My Profile
        </p>
        <br />
        <div className="flex justify-center align-center ">
          <IoPersonCircleSharp
            size="100"
            color="#c9c9c9"
            className="my-[10px]"
          />
        </div>
        {/* 이메일 */}
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
          <div
            id="email"
            name="email"
            className="bg-[#dedede] border
            border-gray-300 text-gray-900 text-sm rounded-md block 
            w-[345px] h-[45px] p-3 flex pl-[50px]"
          >
            {user ? <p>{user.userId} (변경불가)</p> : ""}
          </div>
        </div>
        {/* 이름 */}
        <div className="relative mb-4" isChecked={nameChecked}>
          <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={name}
            onChange={handleName}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md 
                    block focus:outline-0 w-[345px] h-[45px] p-3 pl-[50px]"
            placeholder="변경할 이름을 입력하세요."
            required
          />
        </div>
        {/* 비밀번호 입력 */}
        <div className="relative mb-4" isChecked={pwChecked}>
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
            value={password}
            onChange={handlePw}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
                    focus:outline-0 block w-[345px] p-3 pl-[50px]"
            placeholder="영문 숫자 포함 8자 이상"
            required
          />
        </div>
        {/* 비밀번호 입력 */}
        <div className="relative mb-4" isChecked={pwCheckChecked}>
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
            value={usePwCheck}
            onChange={handlePwCheck}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
                    focus:outline-0 block w-[345px] p-3 pl-[50px]"
            placeholder="비밀번호 확인"
            required
          />
        </div>
        {/* 로그인 버튼 */}
        <button
          type="button"
          onClick={handleUpdate}
          className="mt-[30px] w-[345px] text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-md px-10 py-3 text-center"
        >
          회원 정보 수정
        </button>
        {/* 로그인 정보 저장 */}
        <div className="pt-4 flex items-center mb-10 sm:mb-10">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="hidden w-4 h-4 bg-gray-100 rounded-md border-gray-300 focus:ring-blue-500 focus:ring-2 "
          />
          <label
            htmlFor="default-checkbox"
            className="hidden ml-2 text-sm text-white"
          >
            로그인 정보 저장
          </label>
        </div>
        {/* 비번 분실 */}
        <Link to="/lost" className="">
          <span className="text-[#F57B00] hover:text-orange-700 font-semibold text-sm">
            비밀번호를 잊으셨나요?
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
