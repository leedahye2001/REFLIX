import { useEffect, useState } from "react";
import { BsStarFill, BsPersonHeart, BsPersonXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getContentDetail } from "../apis/content";
import NoContentDetail from "../components/content/NoContentDetail";

const ContentDetail = () => {
  const [content, setContent] = useState();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContentDetail().then((data) => setContent(data));
  }, []);

  return content ? (
    <ContentList content={content} contents={contents} />
  ) : (
    <NoContentDetail />
  );
};

const ContentList = (props) => {
  const { content, contents } = props;

  return (
    <>
      <div className="flex grid items-center">
        <div className="relative bg-black justify-center align-center px-10 laptop:px-20">
          <div className="grid grid-cols-1 mx-auto laptop:w-[800px]">
            <img
              src={content.contentImageUrl}
              className="bg-gray-200 w-[100%]"
              alt="content image"
            />
            <div className="grid grid-rows-1 ml-4">
              <h1 className="text-white text-3xl font-black pb-[10px]">
                {content.contentName} ({content.year})
              </h1>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  개요
                </p>
                <span className="text-[#999] text-base">
                  {content.janre} | {content.contentsCategory}
                </span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  러닝타임
                </p>
                <span className="text-[#999] text-base">
                  {content.runningTime} null
                </span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  개봉
                </p>
                <span className="text-[#999] text-base">{content.year}</span>
              </div>
              <div className="flex">
                {/* <p className="text-[#999] text-base font-bold pr-[10px]">
                  별점
                </p> */}
                <BsStarFill color="#FADB14" className="mt-[4px]" />
                <BsStarFill color="#FADB14" className="mt-[4px]" />
                <BsStarFill color="#FADB14" className="mt-[4px]" />
                <BsStarFill color="#FADB14" className="mt-[4px]" />
                <BsStarFill color="#fff" className="mt-[4px]" />
                <span className="text-[#999] text-base pl-[10px]">9.60</span>
              </div>
              <div>
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  줄거리
                </p>
                <span className="text-[#999] text-base ">{content.story}</span>
              </div>
              <div className="flex flex-cols gap-4">
                <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-2 hover:bg-[#fec3c3]">
                  <button className="flex text-[#626262] hover:text-[#ff7b7b] font-bold">
                    <BsPersonHeart size="25" className="mr-2" />
                    최고예요
                  </button>
                </div>
                <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-2 hover:bg-[#8ebede]">
                  <button className="flex text-[#626262] hover:text-[#3c8cc2] font-bold">
                    <BsPersonXFill size="25" className="mr-2" />
                    별로예요
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentDetail;
