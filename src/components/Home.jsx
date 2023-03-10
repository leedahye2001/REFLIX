import { Component } from "react";
import mainMovie from "../img/pexels-ron-lach-9808087.mp4";
import mainLogo from "../img/RE_FLIX.png";

class Home extends Component {
  render() {
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
        <div
          className="-ml-[7px] sm:ml-0 absolute top-[340px]
        sm:top-[450px] left-[30px] sm:left-[80px] md:left-[200px] lg:left-[400px] xl:left-[985px] xl:w-[700px]
        h-1/2 items-center align-middle"
        >
          <img
            src={mainLogo}
            className="w-3/4 sm:w-3/4 "
            alt="RE:FLIX logo"
          ></img>
          <br />
          <p className="font-black text-white text-3xl sm:text-4xl">
            , for you movie type
          </p>
          <br />
          <p className="font-black text-white text-3xl sm:text-4xl align-right pl-[50px] sm:pl-[200px] md:pl-[180px] xl:pl-[280px] sm:pl-[230px]">
            당신의 바쁜 일상을 위해
          </p>
          <button
            type="button"
            className="mt-[55px] ml-[190px] sm:ml-[400px] md:ml-[380px] xl:ml-[481px] xl:ml-[481px] text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-xl px-10 py-4 text-center"
          >
            시작하기
          </button>
        </div>
        <div className="bg-black w-full h-[700px]">asdfasdf</div>
      </div>
    );
  }
}

export default Home;
