"use client";
import Particle from "./Particle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="z-10 bg-gray-300 relative">
        <div
          className="h-screen flex flex-col items-center justify-center gap-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Particle className=" z-1" />

          <div className="absolute z-[10] flex flex-col items-center justify-center gap-10">
            <div className="pt-20 ">
              <h1 className="text-xl font-semibold">Careers</h1>
            </div>
            <div className="font-bold  text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col items-center gap-2">
              <h1> Navigate Your Next </h1>
              <h1>
                <span className="text-green-600">Career</span> Move
              </h1>
            </div>
            <div className="flex flex-col items-center text-lg gap-1">
              <h2>We're continuously searching for the </h2>
              <h2>right talent. Check if you're a good</h2>
              <h2>match.</h2>
            </div>
            <div>
              <button className="bg-blue-900 px-8 py-2 text-white rounded-md hover:bg-blue-700">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
