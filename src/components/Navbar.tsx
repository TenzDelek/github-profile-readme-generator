import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-6 py-4 text-xs sticky top-0 z-40 border-b bg-black border-white/10">
      <div className=" text-xs md:text-sm font-bold ">
        &copy;README{" "}
        <div className="   text-[8px] md:text-xs flex text-gray-300 items-center justify-center space-x-2 md:space-x-3">
          <p>README FILE GENERATOR FOR</p>{" "}
          <span className=" text-sm md:text-lg">
            <FaGithub />
          </span>
        </div>
      </div>
      <div className="hidden md:block">Home</div>
      <div className=" text-lg">
        <FaGithub />
      </div>
    </div>
  );
};

export default Navbar;
