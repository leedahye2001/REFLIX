import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill, BsStartHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getContentDetail } from "../apis/content";

const ContentDetail = () => {
  // const [playlist, setPlaylist] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCUj6rrhMTR9pipbAWBAMvUQ&maxResults=50&key={}"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setPlaylist(res.data.items);
  //     })
  //     .catch(() => {});
  // }, []);

  // console.log(playlist);

  const [content, setContent] = useState();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContentDetail().then((data) => setContent(data));
  }, []);

  return content ? (
    <ContentList content={content} contents={contents} />
  ) : (
    <h1>Loading</h1>
  );

  //  {content.contentsId},{content.contentName},{content.contentImageUrl},
  //         {content.janre},{content.year},
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
                <span className="text-[#999] text-base font-">
                  {content.janre} | {content.contentsCategory}
                </span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  러닝타임
                </p>
                <span className="text-[#999] text-base font-">
                  {content.runningTime} null
                </span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  개봉
                </p>
                <span className="text-[#999] text-base font-">
                  {content.year}
                </span>
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
              <div className="">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  줄거리
                </p>
                <span className="text-[#999] text-base ">{content.story}</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          {playlist &&
            playlist.map((i, idx) => {
              return (
                <div className="playlist" key={idx}>
                  <img src={i.snippet.thumbnails.high["url"]} alt="" />
                  <Link to={"/playlist/" + i.id}>
                    <h1>{i.snippet.localized["title"]}</h1>
                  </Link>
                  <p>{i.snippet.localized["description"]}</p>
                </div>
              );
            })}
        </div> */}
      </div>
    </>
  );
};

export default ContentDetail;
