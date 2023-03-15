import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainMovie from "../assets/images/movie.mp4";
import mainLogo from "../assets/images/RE_FLIX.png";

// async function load() {
//   return fetch("./test.json")
//     .then((res) => console.log(res))
//     .then((json) => console.log(json));
// }

// load().then((items) => {
//   console.log(items);
// });

const Home = () => {
  // const [product, setProduct] = useState();
  // const params = useParams();
  // const items = params.id;
  // const [data, setData] = useState(null);

  fetch(`http://localhost:5000/items`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });

  // useEffect(() => {
  //   load(items).then((data) => setProduct(data));
  // }, [items]);

  return (
    <div>
      <div className="bg-black">
        <video
          src={mainMovie}
          className="opacity-70 visible w-full h-[700px] object-cover"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="">
        <div
          className="ml-auto absolute top-[340px]
        desktop:top-[450px]
        h-1/2 items-center left-[50%]"
        >
          <img
            src={mainLogo}
            className="w-3/4 laptop:w-1/3 "
            alt="RE:FLIX logo"
          ></img>
          <br />
          <p className="font-black text-white text-3xl laptop:text-4xl">
            , for you movie type
          </p>
          <br />
          <p
            className="font-black text-white text-3xl laptop:text-4xl
            align-right"
          >
            당신의 바쁜 일상을 위해
          </p>
          <button
            type="button"
            className="mt-[55px] ml-[180px] 
              text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-xl px-10 py-4 text-center"
          >
            시작하기
          </button>
        </div>
      </div>
      <div className="bg-black w-full h-[700px] text-white">
        {/* <ul>
          {posts.map(({ content_id, created_date }) => (
            <li key={content_id}>{created_date}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Home;
