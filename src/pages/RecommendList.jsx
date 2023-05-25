import axios from "axios";
import { useRef, useState } from "react";
import { ScrollSection } from "../css/ScrollSectionStyle";

import { useLocation, useNavigate } from "react-router-dom";
import ContentItem from "../components/Test/ContentItem";
import { useUserState } from "../context/context";
import { Background } from "../css/Background";
import NoContentDetail from "../components/content/NoContentDetail";

const RecommendList = () => {
  const { user } = useUserState();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

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

  const handleContentClick = (contentId, category, name) => {
    navigate(`/contents/detail/${contentId}/${category}?contentname=${name}`);
  };

  return (
    <>
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
                {user.userId}님을 위한
              </p>
              <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
                추천 컨텐츠 목록
              </p>
            </>
          ) : (
            <>
              <p className="flex justify-center font-bold text-white laptop:text-5xl text-4xl">
                비회원님을 위한
              </p>
              <p className="flex justify-center font-bold text-[#F57B00] laptop:text-5xl text-4xl">
                추천 컨텐츠 목록
              </p>
            </>
          )}
          <br />

          <div className="grid grid-cols-1 mx-auto laptop:w-[800px] pt-[70px]">
            {data ? (
              <ScrollSection
                ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onThrottleDrageMove : null}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
              >
                {data && data.length > 0 ? (
                  data.map((item) => (
                    <ContentItem
                      image={item.imageUrl}
                      id={item.contentsId}
                      title={item.name}
                      year={item.year}
                      simir={item.simir}
                      genre={item.contentsCategory}
                      onClick={() =>
                        handleContentClick(
                          item.contentsId,
                          item.contentsCategory,
                          item.name
                        )
                      }
                    />
                  ))
                ) : (
                  <p>
                    <NoContentDetail />
                  </p>
                )}
              </ScrollSection>
            ) : (
              <>No Reviews</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendList;
