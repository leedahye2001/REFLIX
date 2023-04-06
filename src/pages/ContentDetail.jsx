import { useEffect, useState } from "react";
import { BsStarFill, BsPersonHeart, BsPersonXFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getContentDetail } from "../apis/content";
import NoContentDetail from "../components/content/NoContentDetail";
const ContentList = (props) => {
  const { content, contents } = props;

  const { id, mediaType } = useParams();
  const [mediaInfo, setMediaInfo] = useState(null);

  const getMediaInfo = async () => {
    try {
      const response = await fetch(
        `/contents/review?contentId=1&contentname=진격의거인&category=0`
      );
      const data = await response.json();
      setMediaInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMediaInfo();
  }, []);

  return (
    <>
      <div className="flex grid items-center">
        <div className="relative bg-black justify-center align-center px-10 laptop:px-20">
          <div className="grid laptop:grid-cols-2 grid-cols-1 mx-auto laptop:w-[800px]">
            <img
              src={content.contentImageUrl}
              className="bg-gray-200 w-[100%] rounded-xl"
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
                <span className="text-[#999] text-base ">
                  {content.story}Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
              <div className="flex flex-cols gap-4 mt-5">
                <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-3 hover:bg-[#fec3c3]">
                  <button className="flex text-[#626262] hover:text-[#ff7b7b] font-bold">
                    <BsPersonHeart size="25" className="mr-2" />
                    최고예요
                  </button>
                </div>
                <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-3 hover:bg-[#8ebede]">
                  <button className="flex text-[#626262] hover:text-[#3c8cc2] font-bold">
                    <BsPersonXFill size="25" className="mr-2" />
                    별로예요
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {mediaInfo ? (
              <div className="grid grid-cols-5">
                {mediaInfo.map((review) => (
                  <div key={review.videoId}>
                    <a href={review.videoId} target="_blank" rel="noreferrer">
                      <div className="grid grid-rows-2">
                        <img
                          src={`${review.reviewImageurl}`}
                          alt={review.reviewName}
                        />

                        <h1 className="text-white">{review.reviewName}</h1>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <>No Reviews</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

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

export default ContentDetail;
