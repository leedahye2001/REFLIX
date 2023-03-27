import { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginBG from "../assets/images/kids.mp4";
import { signupUser } from "../apis/user";
import styled from "styled-components";
import { useUserDispatch } from "../context/context";

const SignupBtn = styled.button`
  border: none;
  padding: 15px 0px;
  color: #ffff;
  font-weight: 600;
  border-radius: 5px;
  background-color: #ff8a3d96;
  cursor: pointer;
  :hover {
    background-color: #ff8a3d96;
  }
  :focus {
    outline: none;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  span:nth-child(1) {
    display: flex;
    color: white;
    font-weight: 600;
    font-size: 18px;
  }
  span:nth-child(2) {
    display: flex;
    margin-bottom: 5px;
    font-size: 12px;
    color: ${(props) => (props.isChecked ? "white" : "#ff0000")};
  }
  input {
    /* width: 80%;
    flex: 1; */
    background-color: white;
    border-color: #afafaf;
    color: black;
    font-weight: 300;
    font-size: 15px;
    border-radius: 0.375rem;
    width: 400px;
    height: 40px;
    padding: 6px 6px 6px 50px;
    display: block;
    :focus {
      outline: none;
    }
  }
`;

const InputIdWrapper = styled.div`
  display: flex;
  button {
    border: 0px;
    text-align: end;
    margin-block: auto;
    color: ${(props) => (props.idChecked ? "white" : "#ff0000")};
    font-size: 12px;
    background-color: #ffff;
    cursor: pointer;
    :focus {
      outline: none;
      border-bottom: 1px solid;
    }
    :disabled {
      cursor: default !important;
    }
  }
`;

const Block = styled.section`
  margin-bottom: 20px;
`;

const SelectWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ff8a3d;
  select {
    width: 100%;
  }
`;

const SignUp = () => {
  // input state
  const dispatch = useUserDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usePwCheck, setUsePwCheck] = useState("");
  const [name, setName] = useState("");

  const idRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
  const nameRegExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]{0,10}$/;
  const idChecked = idRegExp.test(email) || email.trim() === "";
  const pwChecked = pwRegExp.test(password) || password.trim() === "";
  const pwCheckChecked = password === usePwCheck || usePwCheck.trim() === "";
  const nameChecked = nameRegExp.test(name) || name.trim() === "";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
  };
  const handlePwCheck = (e) => {
    setUsePwCheck(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSignup = () => {
    if (email === "" || password === "") {
      return alert("이메일 또는 패스워드를 입력해주세요.");
    }

    if (!idChecked || !pwChecked) {
      return alert("이메일 또는 패스워드를 확인해주세요.");
    }
    if (password !== usePwCheck) {
      return alert("동일한 패스워드를 입력해주세요.");
    }
    if (name === "" || !nameChecked) {
      return alert("이름을 확인해주세요.");
    }

    signupUser(email, password, name).then(() => {
      // setUseFadeOut(true);
      // setTimeout(() => {
      //   setVisible(false);
      //   setUseFadeOut(false);
      // }, 500);

      dispatch({
        type: "CREATE_USER",
        user: {
          email,
          password,
          name,
        },
      });
      setTimeout(() => {}, 500);

      console.log("회원가입 !");
      window.alert("회원가입 되었습니다. 로그인 해주세요.");
      navigate("/");
    });
  };

  return (
    <div className="flex grid items-center">
      <div className="relative bg-black justify-center align-center">
        <video
          src={loginBG}
          className="opacity-30 laptop:visible w-full h-[1000px] object-cover"
          autoPlay
          loop
          muted
          // playbackRate="0.8"
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
        <p className="flex font-bold text-[#F57B00] text-5xl">SIGN UP</p>
        <br />

        <Block>
          <InputWrapper isChecked={idChecked}>
            <span>이메일</span>
            <span>ex@reflix.com</span>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <InputIdWrapper idChecked={idChecked}>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  maxLength={50}
                  placeholder="이메일을 입력하세요."
                />
              </InputIdWrapper>
            </div>
          </InputWrapper>
          <InputWrapper isChecked={nameChecked}>
            <span>이름</span>
            <span>한글 또는 영문 10자 이하</span>
            <div className="relative mb-4 sm:mb-6">
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
                maxLength={10}
                placeholder="이름을 입력하세요."
              />
            </div>
          </InputWrapper>
          <InputWrapper isChecked={pwChecked}>
            <span>비밀번호</span>
            <span>영문 숫자 포함 8자 이상</span>
            <div className="relative mb-4 sm:mb-6">
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
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                value={password}
                onChange={handlePw}
                maxLength={15}
                placeholder="비밀번호를 입력하세요."
              />
            </div>
          </InputWrapper>
          <InputWrapper isChecked={pwCheckChecked}>
            <span>비밀번호 확인</span>
            <span>위에 입력한 비밀번호와 동일</span>
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                type="password"
                value={usePwCheck}
                onChange={handlePwCheck}
                placeholder="위에 입력한 비밀번호와와 동일하게 입력해주세요."
              />
            </div>
          </InputWrapper>
        </Block>

        <button
          type="button"
          onClick={handleSignup}
          className="mt-[30px] w-[400px] text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-md px-10 py-4 text-center"
        >
          가입하기
        </button>

        <div className="pt-4 flex items-center text-sm  ml-[90px]">
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
};

export default SignUp;
