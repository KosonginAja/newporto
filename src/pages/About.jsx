import React from "react";
import AnimatedContent from "../AnimatedContent";
import Image, { AboutMe, listTools } from "../data";

const About = () => {
  return (
    <AnimatedContent>
      <div className="flex-2 min-h-[60vh] bg-blue-300/60 rounded-2xl">
        <div className="p-4 text-sm">ABOUT</div>
        <div className="flex">
          <div className="w-1/4 px-4 pb-4">
            <img src={Image.HeroImage} alt="" className="rounded-lg" />
          </div>
          <div className="w-3/4 px-4">
            <p className="text-lg">{AboutMe.title}</p>
            <p className="text-xs pt-2">{AboutMe.subtitle}</p>
            <p className="text-sm py-4">Name : {AboutMe.name}</p>
            <p className="text-sm py-3">Birthday : {AboutMe.birthday}</p>
            {/* <p className="text-sm py-3">Email : {AboutMe.email}</p> */}
            <p className="text-sm py-3">Location : {AboutMe.loc}</p>
            <p className="text-sm py-3">Job : {AboutMe.job}</p>
            <p className="text-sm py-3">{AboutMe.desc}</p>
          </div>
        </div>
        <div className="flex-2">
          <div className="p-4 text-sm">Tools I Use</div>
          <div className="flex flex-wrap gap-4 px-4 pb-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-lg flex flex-col items-center justify-center p-2"
              >
                <img src={tool.gambar} alt={tool.nama} className="w-12 h-12" />
                <p className="text-xs mt-2 text-center">{tool.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default About;
