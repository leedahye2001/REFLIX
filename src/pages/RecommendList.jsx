import { useContext, useEffect, useRef, useState } from "react";
import { loginUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import loginBG from "../assets/images/kids.mp4";
import { useUserState, useUserDispatch } from "../context/context";
import { throttle } from "../components/util";
import { ScrollSection } from "../css/ScrollSectionStyle";
import ContentListModal from "../components/content/ContentListModal";
import Background from "../css/Background";

// const contentListModal = ({ title, url }) => {
//   return (
//     <>
//       <div>
//         {/* <div className="grid grid-rows-1">
//           <div className="w-[250px]">
//             <img
//               src={url}
//               // alt={review.contentName}
//               className="rounded-xl"
//             />
//           </div>
//           <p className="py-5 text-[20px] text-[#999]">{title}</p>
//         </div> */}
//         <div className="bg-white w-60"></div>
//       </div>
//     </>
//   );
// };

const RecommendList = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentInfo, setContentInfo] = useState(null);
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [coordinate, setCoordinate] = useState([]);
  const [modalMode, setModalMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [movieId, setMovieId] = useState("");
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    if (isHovered) {
      const notTimer = setTimeout(() => {
        setModalMode(true);
      }, 1500);
      return () => clearTimeout(notTimer);
    }
  }, [isHovered]);

  const Content = ({
    key,
    id,
    img,
    contentName,
    contentCategory,
    setModalMode,
    setPreviewImg,
    setPreviewTitle,

    // key={review.contentsId}
    //               id={review.contentsId}
    //               img={review.contentImageUrl}
    //               contentName={review.contentName}
    //               contentCategory={review.contentsCategory}
  }) => {
    const onMouseOver = (event) => {
      let defaultX = 228.6666717529297;
      let defaultY = 64.19792175292969;

      // console.log(event.target.getBoundingClientRect());
      setModalMode(true);

      let target = event.target;

      if (target.tagName === "IMG") {
        const x = event.target.getBoundingClientRect().left;
        const y = window.pageYOffset + event.target.getBoundingClientRect().top;
        setPreviewImgSrc(target.src);
        setPreviewTitle(target.parentNode.dataset.value);
        setMovieId(target.parentNode.dataset.id);
        setCoordinate([x - defaultX, y]);
        setIsHovered(true);
      }

      // if (
      //   modalMode &&
      //   !event.target.className.includes("previewModal") &&
      //   !event.target.className.includes("poster")
      // ) {
      //   setModalMode(false);
      // }
    };

    return (
      <>
        <div onMouseOver={onMouseOver}>
          <div className="grid grid-rows-1" key={key}>
            <div className="w-[250px]">
              <img src={`${img}`} alt={contentName} className="rounded-xl" />
            </div>
            <p className="py-5 text-[20px] text-[#999]">{contentName}</p>
          </div>
          {/* <ContentListModal
            // isOpen={isModalOpen}
            // closeModal={closeModal}
            // title={review.contentName}
            // url={review.contentImageUrl}
            genre={contentCategory}
            // running={running}
            // year={review.year}
            contentInfo={contentInfo}
          /> */}
        </div>
      </>
    );
  };

  const getContentInfo = async () => {
    try {
      const response = await fetch(`/auth/movie/test`);
      const data = await response.json();
      setContentInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContentInfo();
  }, []);

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

  const { user } = useUserState();

  const onMouseOver = (event) => {
    if (
      modalMode &&
      !event.target.className.includes("previewModal") &&
      !event.target.className.includes("poster")
    ) {
      setModalMode(false);
    }
  };

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
            <p className="flex justify-center font-bold text-white laptop:text-5xl text-4xl">
              {user.userId}님
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        ) : (
          <>
            <p className="flex justify-center font-bold text-white laptop:text-5xl text-4xl">
              비로그인
            </p>
            <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
              추천 컨텐츠 목록
            </p>
          </>
        )}
        <br />

        <div
          onMouseOver={onMouseOver}
          className="grid grid-cols-1 mx-auto laptop:w-[800px] pt-[70px]"
        >
          {contentInfo ? (
            <ScrollSection
              ref={scrollRef}
              onMouseDown={onDragStart}
              onMouseMove={isDrag ? onThrottleDrageMove : null}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
            >
              {contentInfo.map((review) => (
                <Content
                  setModalMode={setModalMode}
                  key={review.contentsId}
                  id={review.contentsId}
                  img={review.contentImageUrl}
                  contentName={review.contentName}
                  contentCategory={review.contentsCategory}
                />
              ))}
            </ScrollSection>
          ) : (
            <>No Reviews</>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendList;
