import { useState } from "react";
import { Link } from "react-router-dom";
import mainMovie from "../assets/images/movie.png";
import UseScrollFadeIn from "../hooks/UseScrollFadeIn";
import Typewriter from "typewriter-effect";

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
        <mainMovie className="opacity-70 visible w-full h-[700px] object-cover" />
      </div>

      <div>
        <div className="absolute -translate-x-1/2 top-[40%] text-center items-center left-[50%]">
          <br />
          <div>
            <h1 className="flex font-black text-white text-6xl opacity-90">
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

          <Link to="/test">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
