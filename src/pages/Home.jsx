import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mainMovie from "../assets/images/movie.mp4";
import mainLogo from "../assets/images/RE_FLIX.png";

const Home = () => {
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
      <div>
        <div className="absolute top-[450px] laptop:top-[450px] items-center left-[10%] laptop:left-[50%]">
          <img
            src={mainLogo}
            className="w-3/4 laptop:w-2/3 "
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
            className="mt-[55px]
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
