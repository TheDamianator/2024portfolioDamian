import React from "react";
import circleImage from "./assets/circle2.png";
import { Fade } from "react-awesome-reveal";

export default function LandingPage() {
  return (
    <>
      <div id="landingpage">
        <Fade fraction={0.1}>
          <div className="bg-primarywhite h-screen font-custom font-bold flex justify-center items-center relative">
            <div className="  absolute bottom-12 left-1/2 transform w-3/4 -translate-x-1/2">
              <Fade fraction={0.1}>
                <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl text-accentbrown z-10 mb-6">
                  HI THERE, I'M <br /> DAMIAN CAELEN.
                </p>
              </Fade>
              <Fade fraction={0.1}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-accentbrown flex justify-center items-center z-10">
                  A Dutch frontend developer & web designer, skilled in UI and UX principles, turning visions to
                  reality. Take a look through my portfolio and let's work together!
                </p>
              </Fade>
            </div>

            <img
              src={circleImage}
              alt=""
              className="md:hidden absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/5 w-4/6 opacity-100 z-0"
            />

            <img
              src={circleImage}
              alt=""
              className="hidden md:block absolute top-1/5 left-1/2 transform -translate-x-1/2 w-1/3 opacity-100 z-0"
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
