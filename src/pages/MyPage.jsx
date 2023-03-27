import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div className="flex grid items-center">
      <div className="relative bg-black justify-center align-center h-[1024px]"></div>
      <div
        className="text-center flex-cols z-1
        absolute
        top-[10%]
        left-[50%] 
        -translate-x-1/2"
      >
        <br />
        <p className="flex font-bold text-[#F57B00] laptop:text-5xl tablet:text-4xl text-4xl">
          User 님의 페이지
        </p>
        <br />

        <div className="relative mb-4 w-[100%]">
          <div
            id="email"
            name="email"
            className="bg-[#dedede] border grid grid-cols-3 justify-center align-center flex
            border-gray-300 text-gray-900 text-sm rounded-md 
            w-[345px] tablet:w-[500px] laptop:w-[700px] h-[150px]"
          >
            <div className="align-center ">1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
