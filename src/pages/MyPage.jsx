import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";

const MyPage = () => {
  return (
    <div className="flex grid items-center">
      <div className="relative bg-black justify-center align-center h-[1024px]"></div>
      <div
        className="text-center flex-cols z-1
        absolute
        top-[15%]
        left-[50%]
        -translate-x-1/2"
      >
        <br />
        <p className="flex justify-center font-bold text-[#F57B00] text-5xl">
          마이페이지
        </p>
        <br />
        <div className="flex justify-center align-center ">
          <Link to="/profile">
            <IoSettingsSharp size="40" color="#ffffff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
