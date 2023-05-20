import { wait } from "@testing-library/user-event/dist/utils";
import { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import mainMovie from "../assets/images/movie.mp4";
import mainLogo from "../assets/images/RE_FLIX.png";
import TypingEffect from "../components/home/TypingEffect";
import UseScrollFadeIn from "../hooks/UseScrollFadeIn";
import Typewriter from "typewriter-effect";

const Div = styled.div`
  margin-top: 1000px;
  color: black;
  text-align: center;
  opacity: 0;
  transform: rotate(-720deg);
  transition: all 0.5s;
`;

const Form = styled.div`
  margin: 500px 0 500px 0;
  color: blue;
`;

const Home = () => {
  const [state] = useState({
    title: "RE",
  });

  const animatedItem = {
    0: UseScrollFadeIn("up", 1, 0),
    1: UseScrollFadeIn("left", 1, 0.2),
    2: UseScrollFadeIn("down", 1, 0.3),
  };

  return (
    <div>
      <div className="bg-black flex align-center">
        <video
          src={mainMovie}
          className="opacity-70 visible w-full h-[700px] object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      <div>
        <div className="absolute -translate-x-1/2 top-[40%] text-center items-center left-[50%]">
          <br />
          {/* <p
            {...animatedItem[2]}
            className="font-black text-white text-4xl laptop:text-5xl opacity-90"
          >
            Recommend+Review
          </p>
          <br />
          <p
            {...animatedItem[1]}
            className="font-black text-white text-4xl laptop:text-5xl opacity-90"
          >
            Flicks
          </p> */}
          {/* <img
            src={mainLogo}
            className="w-3/4 laptop:w-2/3 items-center"
            alt="RE:FLIX logo"
          /> */}
          {/* <TypingEffect
            // className="font-black text-white text-4xl laptop:text-5xl opacity-90"
            text={letters[0]}
          /> */}

          <div>
            <h1 className="flex font-black text-white text-5xl opacity-90">
              {state.title}
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: ["COMMEND", "VIEW", ":FLIX"],
                }}
              />
            </h1>
          </div>

          <Link to="/year">
            <button
              {...animatedItem[2]}
              type="button"
              className="mt-[55px]
              text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-xl px-10 py-4 text-center"
            >
              START
            </button>
          </Link>
          {/* <Link to="/contentdetail">
            <button
              type="button"
              className="mt-[55px]
              text-white bg-[#F57B00] hover:bg-orange-700
                      font-semibold rounded-md text-xl px-10 py-4 text-center"
            >
              START
            </button>
          </Link> */}
        </div>
      </div>

      <div>{/* <p {...animatedItem[0]}>dummy</p> */}</div>
    </div>
  );
};

export default Home;
