import { Link } from "react-router-dom";
import { Background } from "../css/Background";
import { YearWrapper } from "../css/YearStyle";

const Keyword = ({ type, test }) => {
  return (
    <>
      <div>
        <div className="flex grid items-center">
          <Background />
          <YearWrapper>
            {test.map(({ keyword }) => (
              <h1>{keyword}</h1>
            ))}

            <div className="grid grid-cols-2 desktop:grid-cols-3 gap-4">
              {type.map(({ keyword }) => (
                <button
                  className="grid items-center bg-[#303030] mt-10 rounded-md h-[60px]
                  hover:bg-gray-500 hover:ring-2 ring-orange-500"
                  key={keyword}
                >
                  <h2 className="text-white grid align-center">{keyword}</h2>
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                className="grid items-center bg-[#fff] mt-10 rounded-md h-[60px] 
                  hover:ring-2 ring-orange-500 w-[100px]"
              >
                <h2 className="text-[#f57b00] grid align-center">모르겠어요</h2>
              </button>
              <Link to="/year">
                <button
                  className="grid items-center bg-[#f57b00] mt-10 rounded-md h-[60px]
                  hover:ring-2 ring-white w-[100px]"
                >
                  <h2 className="text-white grid align-center">다음</h2>
                </button>
              </Link>
            </div>
          </YearWrapper>
        </div>
      </div>
    </>
  );
};
export default Keyword;
