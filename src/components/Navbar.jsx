import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-2xl font-bold bg-white text-blue-400 p-1 md:bg-transparent md:text-white">
          Portfolio
        </h1>
      </div>
      <ul className="menu flex items-center gap-10 sm:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 -top-10 opacity-0 md:opacity-100 md:top-0 px-10">
        <li className="group relative w-max">
          <NavLink
            to=""
            className={({ isActive }) =>
              `text-md font-medium text-white ${isActive ? "" : ""}`
            }
          >
            Home
          </NavLink>
          <span
            className={`absolute -bottom-1 left-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
          <span
            className={`absolute -bottom-1 right-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
        </li>
        <li className="group relative w-max">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-md font-medium text-white ${isActive ? "" : ""}`
            }
          >
            About Me
          </NavLink>
          <span
            className={`absolute -bottom-1 left-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/about"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
          <span
            className={`absolute -bottom-1 right-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/about"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
        </li>
        <li className="group relative w-max">
          <NavLink
            to="project"
            className={({ isActive }) =>
              `text-md font-medium text-white ${isActive ? "" : ""}`
            }
          >
            Portfolio
          </NavLink>
          <span
            className={`absolute -bottom-1 left-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/project"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
          <span
            className={`absolute -bottom-1 right-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/project"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
        </li>
        <li className="group relative w-max">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-md font-medium text-white ${isActive ? "" : ""}`
            }
          >
            Contact
          </NavLink>
          <span
            className={`absolute -bottom-1 left-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/contact"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
          <span
            className={`absolute -bottom-1 right-1/2 h-0.5 bg-blue-50 transition-all duration-300 ease-in-out ${
              window.location.pathname === "/contact"
                ? "w-3/6"
                : "w-0 group-hover:w-3/6"
            }`}
          ></span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
