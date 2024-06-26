import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.","FIGMA Designer.","Frontend Developer.","Backend Developer", "Full Stack Developer.", ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg  font-normal">WELCOME TO THE PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">KISMAT BOHORA</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            I'm a passionate and dedicated full-stack web developer with experience in building responsive websites using React, Nodejs ,Express js and Mongo DB.
        </p>
      </div>
    </div>
  );
}

export default LeftBanner