import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { useUserState } from "../context/context";
import { Background } from "../css/Background";

const MyPage = () => {
  const { user } = useUserState();

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

        {user ? (
          <>
            <p>{user.userId}님</p>
            <p className="flex justify-center font-bold text-[#F57B00] text-5xl">
              마이페이지
            </p>
          </>
        ) : (
          <>
            <p>비로그인</p>
            <p className="flex justify-center font-bold text-[#F57B00] text-5xl">
              마이페이지
            </p>
          </>
        )}
        <br />
        <div className="flex justify-center align-center ">
          <Link to="/profile/:id">
            <IoSettingsSharp size="40" color="#ffffff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
