import { useRef, useState } from "react";

// const Util = () => {
//   /* 좌우 스크롤 */
//   const scrollRef = useRef(null);
//   const [isDrag, setIsDrag] = useState(false);
//   const [startX, setStartX] = useState();

//   const throttle = (func, ms) => {
//     let throttled = false;
//     return (...args) => {
//       if (!throttled) {
//         throttled = true;
//         setTimeout(() => {
//           func(...args);
//           throttled = false;
//         }, ms);
//       }
//     };
//   };

//   /* 좌클릭하는 상태 */
//   const onDragStart = (e) => {
//     e.preventDefault();
//     setIsDrag(true);
//     setStartX(e.pageX + scrollRef.current.scrollLeft);
//   };

//   /* 클릭 멈춘 상태 */
//   const onDragEnd = () => {
//     setIsDrag(false);
//   };

//   /* 클릭하던 안 하던 마우스를 움직이는 상태 */
//   const onDragMove = (e) => {
//     if (isDrag) {
//       const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
//       scrollRef.current.scrollLeft = startX - e.pageX;
//       if (scrollLeft === 0) {
//         setStartX(e.pageX);
//       } else if (scrollWidth <= clientWidth + scrollLeft) {
//         setStartX(e.pageX + scrollLeft);
//       }
//     }
//   };

// };

/* 특정 글자 수 넘으면 ... 으로 넘기기 */
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export { truncate };
