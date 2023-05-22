import { useEffect, useRef, useState } from "react";
import { BsStarFill, BsPersonHeart, BsPersonXFill } from "react-icons/bs";
import { Navigate, Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getContentDetail } from "../apis/content";
import NoContentDetail from "../components/content/NoContentDetail";
import { truncate } from "../components/util";
import { ScrollSection } from "../css/ScrollSectionStyle";
import axios from "axios";

// const ContentList = (props) => {
//   const { content, contents } = props;
//   const [contentInfo, setContentInfo] = useState(null);

//   const getContentInfo = async () => {
//     try {
//       const response = await fetch(`/contents/detail?contentId=1&category=0`);
//       const data = await response.json();
//       setContentInfo(data);
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getContentInfo();
//   }, []);

//   return (
//     <>
//       <div className="flex grid items-center">
//         <div className="relative bg-black justify-center align-center px-10 laptop:px-20">
//           <div className="grid laptop:grid-cols-2 grid-cols-1 mx-auto laptop:w-[800px]">
//             <img
//               src={content.contentImageUrl}
//               className="bg-gray-200 w-[100%]"
//               alt="content image"
//             />
//             <div className="grid grid-rows-1 ml-4">
//               <h1 className="text-white text-3xl font-black pb-[10px]">
//                 {content.contentName} ({content.year})
//               </h1>
//               <div className="flex">
//                 <p className="text-[#999] text-base font-bold pr-[10px]">
//                   개요
//                 </p>
//                 <span className="text-[#999] text-base">
//                   {content.janre} | {content.contentsCategory}
//                 </span>
//               </div>
//               <div className="flex">
//                 <p className="text-[#999] text-base font-bold pr-[10px]">
//                   러닝타임
//                 </p>
//                 <span className="text-[#999] text-base">
//                   {content.runningTime} null
//                 </span>
//               </div>
//               <div className="flex">
//                 <p className="text-[#999] text-base font-bold pr-[10px]">
//                   개봉
//                 </p>
//                 <span className="text-[#999] text-base">{content.year}</span>
//               </div>
//               <div className="flex">
//                 {/* <p className="text-[#999] text-base font-bold pr-[10px]">
//                   별점
//                 </p> */}
//                 <BsStarFill color="#FADB14" className="mt-[4px]" />
//                 <BsStarFill color="#FADB14" className="mt-[4px]" />
//                 <BsStarFill color="#FADB14" className="mt-[4px]" />
//                 <BsStarFill color="#FADB14" className="mt-[4px]" />
//                 <BsStarFill color="#fff" className="mt-[4px]" />
//                 <span className="text-[#999] text-base pl-[10px]">9.60</span>
//               </div>
//               <div>
//                 <p className="text-[#999] text-base font-bold pr-[10px]">
//                   줄거리
//                 </p>
//                 <span className="text-[#999] text-base ">
//                   {content.story}Lorem Ipsum is simply dummy text of the
//                   printing and typesetting industry. Lorem Ipsum has been the
//                   industry's standard dummy text ever since the 1500s, when an
//                   unknown printer took a galley of type and scrambled it to make
//                   a type specimen book. It has survived not only five centuries,
//                   but also the leap into electronic typesetting, remaining
//                   essentially unchanged. It was popularised in the 1960s with
//                   the release of Letraset sheets containing Lorem Ipsum
//                   passages, and more recently with desktop publishing software
//                   like Aldus PageMaker including versions of Lorem Ipsum.
//                 </span>
//               </div>
//               <div className="flex flex-cols gap-4 mt-5">
//                 <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-3 hover:bg-[#fec3c3]">
//                   <button className="flex text-[#626262] hover:text-[#ff7b7b] font-bold">
//                     <BsPersonHeart size="25" className="mr-2" />
//                     최고예요
//                   </button>
//                 </div>
//                 <div className="flex bg-[#C3C3C3] rounded-md w-40 justify-center px-[20px] py-3 hover:bg-[#8ebede]">
//                   <button className="flex text-[#626262] hover:text-[#3c8cc2] font-bold">
//                     <BsPersonXFill size="25" className="mr-2" />
//                     별로예요
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 mx-auto laptop:w-[800px]">
//             <h1 className="text-white text-4xl font-black pt-[100px] pb-[30px]">
//               🎞 관련 리뷰 영상
//             </h1>
//             {contentInfo ? (
//               <ScrollSection
//                 ref={scrollRef}
//                 onMouseDown={onDragStart}
//                 onMouseMove={isDrag ? onThrottleDrageMove : null}
//                 onMouseUp={onDragEnd}
//                 onMouseLeave={onDragEnd}
//               >
//                 {contentInfo.map((review) => (
//                   <div key={review.videoId}>
//                     <a href={review.videoId} target="_blank" rel="noreferrer">
//                       <div className="grid grid-rows-1">
//                         <div className="w-[250px] rounded-md">
//                           <img
//                             src={`${review.reviewImageurl}`}
//                             alt={review.reviewName}
//                             className="rounded-xl"
//                           />
//                         </div>
//                         <p className="text-[#999]">
//                           {truncate(review.reviewName, 20)}
//                         </p>
//                       </div>
//                     </a>
//                   </div>
//                 ))}
//               </ScrollSection>
//             ) : (
//               <>No Reviews</>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const ContentDetail = () => {
  const { contentId, category } = useParams();
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [contentInfo, setContentInfo] = useState(null);
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  /* 좌클릭하는 상태 */
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  /* 클릭 멈춘 상태 */
  const onDragEnd = () => {
    setIsDrag(false);
  };

  /* 클릭하던 안 하던 마우스를 움직이는 상태 */
  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 30; /* 좌우로 넘길 때, delay 되는 시간 */
  const onThrottleDrageMove = throttle(onDragMove, delay);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const contentname = searchParams.get("contentname");

    axios
      .get(
        `/contents/detail?contentId=${encodeURIComponent(
          contentId
        )}&category=${encodeURIComponent(category)}`
      )
      .then((response) => {
        if (response.status === 200) {
          const contentData = response.data;
          // console.log(contentData);
          setContent(contentData);
        } else {
          console.log("응답 상태 코드:", response.status);
          // 에러 처리 로직 추가
        }
      })
      .catch((err) => {
        console.log(err);
        // 에러 처리 로직 추가
      });

    axios
      .get(
        `/contents/review?contentId=${encodeURIComponent(
          contentId
        )}&contentname=${encodeURIComponent(
          contentname
        )}&category=${encodeURIComponent(category)}`
      )
      .then((response) => {
        if (response.status === 200) {
          const contentDataInfo = response.data;
          console.log(contentDataInfo);
          setContentInfo(contentDataInfo);
        } else {
          console.log("응답 상태 코드:", response.status);
          // 에러 처리 로직 추가
        }
      })
      .catch((err) => {
        console.log(err);
        // 에러 처리 로직 추가
      });
  }, [contentId, category, location.search]);
  // useEffect(() => {
  //   // Axios 요청을 통해 콘텐츠의 상세 정보를 가져옵니다.
  //   axios
  //     .get(`/contents/detail?contentId=${contentId}&category=${category}`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const contentData = response.data;
  //         console.log(contentData);
  //         setContent(contentData);
  //       } else {
  //         console.log("응답 상태 코드:", response.status);
  //         // 에러 처리 로직 추가
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // 에러 처리 로직 추가
  //     });
  // }, [contentId, category]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `/contents/review?contentId=${contentId}&contentname=${contentname}&category=${category}`
  //     )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const contentDataInfo = response.data;
  //         console.log(contentDataInfo);
  //         setContentInfo(contentDataInfo);
  //       } else {
  //         console.log("응답 상태 코드:", response.status);
  //         // 에러 처리 로직 추가
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // 에러 처리 로직 추가
  //     });
  // }, [contentId, contentname, category]);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const contentId = searchParams.get("contentId");
  //   const category = searchParams.get("category");
  //   const contentname = searchParams.get("contentname");

  //   // Axios 요청을 통해 콘텐츠의 상세 정보를 가져옵니다.
  //   axios
  //     .get(`/contents/detail?contentId=${contentId}&category=${category}`)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const contentData = response.data;
  //         console.log(contentData);
  //         setContent(contentData);
  //       } else {
  //         console.log("응답 상태 코드:", response.status);
  //         // 에러 처리 로직 추가
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // 에러 처리 로직 추가
  //     });

  //   // Axios 요청을 통해 콘텐츠의 상세 정보를 가져옵니다.
  //   axios
  //     .get(
  //       `/contents/review?contentId=${contentId}&contentname=${contentname}&category=${category}`
  //     )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const contentDataInfo = response.data;
  //         console.log(contentDataInfo);
  //         setContentInfo(contentDataInfo);
  //       } else {
  //         console.log("응답 상태 코드:", response.status);
  //         // 에러 처리 로직 추가
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // 에러 처리 로직 추가
  //     });
  // }, [location.search]);

  // return (
  //   <>
  //     {content && (
  //       <div>
  //         <h1>{content.contentName}</h1>
  //         <img src={content.contentImageUrl} alt={content.contentName} />
  //         <p>Year: {content.year}</p>
  //         <p>Genre: {content.genre}</p>
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <>
      {content && (
        <div className="flex grid items-center">
          <div className="relative bg-black justify-center align-center px-10 laptop:px-20">
            <div className="grid laptop:grid-cols-2 grid-cols-1 mx-auto laptop:w-[800px]">
              <img
                src={content.contentImageUrl}
                className="block m-auto bg-gray-200 w-[50%] my-4 laptop:my-0 laptop:w-[100%] rounded-2xl"
                alt={content.contentName}
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
                    {content.contentsCategory}
                  </span>
                  {content.genreList.map((item) => (
                    <span className="text-[#999] text-base" key={item.genre}>
                      &nbsp;| {item.genre}
                    </span>
                  ))}
                </div>

                <div className="flex">
                  <p className="text-[#999] text-base font-bold pr-[10px]">
                    러닝타임
                  </p>
                  {null ? (
                    <span className="text-[#999] text-base">null</span>
                  ) : (
                    <span className="text-[#999] text-base">
                      {content.runnigTime} 분
                    </span>
                  )}
                </div>
                <div className="flex">
                  <p className="text-[#999] text-base font-bold pr-[10px]">
                    개봉
                  </p>
                  <span className="text-[#999] text-base">{content.year}</span>
                </div>
                <div className="flex">
                  <BsStarFill color="#FADB14" className="mt-[4px]" />
                  <BsStarFill color="#FADB14" className="mt-[4px]" />
                  <BsStarFill color="#FADB14" className="mt-[4px]" />
                  <BsStarFill color="#FADB14" className="mt-[4px]" />
                  <BsStarFill color="#fff" className="mt-[4px]" />
                  {/* <span className="text-[#999] text-base pl-[10px]">9.60</span> */}
                </div>
                <div>
                  <p className="text-[#999] text-base font-bold pr-[10px]">
                    줄거리
                  </p>
                  {null ? (
                    <span className="text-[#999] text-base">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </span>
                  ) : (
                    <span className="text-[#999] text-base">
                      {content.story}
                    </span>
                  )}
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

            <div className="grid grid-cols-1 mx-auto laptop:w-[800px]">
              <h1 className="text-white text-4xl font-black pt-[100px] pb-[30px]">
                🎞 관련 리뷰 영상
              </h1>
              {contentInfo ? (
                <ScrollSection
                  ref={scrollRef}
                  onMouseDown={onDragStart}
                  onMouseMove={isDrag ? onThrottleDrageMove : null}
                  onMouseUp={onDragEnd}
                  onMouseLeave={onDragEnd}
                >
                  {contentInfo.map((review) => (
                    <div key={review.videoId} className="">
                      <a href={review.videoId} target="_blank" rel="noreferrer">
                        <div className="grid grid-rows-1">
                          <div className="w-[280px]">
                            <img
                              src={`${review.reviewImageurl}`}
                              alt={review.reviewName}
                              className="border-4 border-white rounded-xl"
                            />
                          </div>
                          <p className="text-[#999]">
                            {truncate(review.reviewName, 20)}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </ScrollSection>
              ) : (
                <h1 className="text-white text-xl">No Reviews</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentDetail;
