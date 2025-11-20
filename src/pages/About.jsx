import React from "react";
import AnimatedContent from "../AnimatedContent";
import Image from "../data";

const About = () => {
  return (
    <AnimatedContent>
      <div className="flex-2 min-h-[60vh] bg-blue-300/60 rounded-2xl">
        <div className="p-4 text-xs">ABOUT</div>
        <div className="flex">
          <div className="w-1/4 px-4 pb-4">
            <img src={Image.HeroImage} alt="" className="rounded-lg" />
          </div>
          <div className="w-3/4 px-4">
            <p className="text-lg">Student & Programmer</p>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default About;
