import React from "react";
import TextType from "../TextType";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-32">
      {/* ...Text... */}
      <div className="name mb-5 text-4xl">
        <TextType
          text={[
            "Hi!",
            "I'm Chivo Hifdz Addien Kurniawan",
            "From Gunadarma University",
            "Economy Faculty Student",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          textColors={["#326a93"]}
          className="texttypebg"
        />
      </div>

      {/* Menu */}
      <div className="links flex gap-10 bg-transparent">
        <p className="group relative w-max">
          <NavLink to="" className="text-md font-medium text-blue-400">
            Home
          </NavLink>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
        </p>
        <p className="group relative w-max">
          <NavLink to="about" className="text-md font-medium text-blue-400">
            About Me
          </NavLink>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
        </p>
        <p className="group relative w-max">
          <NavLink to="project" className="text-md font-medium text-blue-400">
            Portfolio
          </NavLink>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
        </p>
        <p className="group relative w-max">
          <NavLink to="contact" className="text-md font-medium text-blue-400">
            Contact
          </NavLink>
          <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-blue-700 group-hover:w-3/6"></span>
        </p>
      </div>

      {/* ...Social... */}
      <div className="socials mt-5 w-full flex justify-center sm:justify-start">
        <ul className="flex items-center gap-6 justify-center w-full sm:justify-start">
          <li>
            <NavLink
              to="https://github.com/kosonginaja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:text-black"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://linkedin.com/in/imvoo7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://instagram.com/chvajhh._f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://facebook.com/yumeko.ac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
