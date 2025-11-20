import React from "react";
import AnimatedContent from "../AnimatedContent";

const About = () => {
  return (
    <AnimatedContent>
      <div className="flex-2 min-h-[60vh] bg-blue-300/60 rounded-2xl">
        <div className="p-4 text-xs">ABOUT</div>
        <div className="p-4"></div>
      </div>
    </AnimatedContent>
  );
};

export default About;
