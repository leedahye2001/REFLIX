import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill, BsStartHalf, BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

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

  const [contents, setContents] = useState(null);
  useEffect(() => {
    const getContentDetail = async () => {
      return await fetch(`/contents/submit`)
        .then((res) => {
          if (!res.ok) {
            return new Promise.reject("no content found");
          }
          return res.json();
        })
        .then((list) => {
          setContents(list);
        })
        .catch((err) => console.error(err));
    };
    getContentDetail();
  }, []);

  const ContentList = ({ contents }) => {
    if (!contents) return;
    return contents.map((content) => {
      return (
        <>
          {content.year},{content.contentname}
        </>
      );
    });
  };

  return (
    <>
      <div className="flex grid items-center">
        <div className="relative bg-black justify-center align-center px-10 laptop:px-20">
          <div className="grid grid-cols-1 mx-auto laptop:w-[800px]">
            <ContentList contents={contents} />
            <img
              src=""
              className="bg-gray-200 w-[100%] h-[400px]"
              alt="content image"
            />
            <div className="grid grid-rows-1 ml-4">
              <h1 className="text-white text-3xl font-black pb-[10px]">
                TITLE (YEAR)
              </h1>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  개요
                </p>
                <span className="text-[#999] text-base font-">장르 | 국가</span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  러닝타임
                </p>
                <span className="text-[#999] text-base font-">147분</span>
              </div>
              <div className="flex">
                <p className="text-[#999] text-base font-bold pr-[10px]">
                  개봉
                </p>
                <span className="text-[#999] text-base font-">2023.03.16.</span>
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
                <span className="text-[#999] text-base ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
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
