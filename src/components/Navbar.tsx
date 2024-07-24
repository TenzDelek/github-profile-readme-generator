import React from "react";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className=" font-goatproduct flex items-center justify-between px-6 py-4 text-xs sticky top-0 z-40 border-b bg-black border-white/10">
      <div className=" text-sm font-bold">
        &copy;README{" "}
        <div className="  font-goatproduct text-xs flex text-gray-300 items-center justify-center space-x-3">
          <p>README FILE GENERATOR FOR</p>{" "}
          <span className=" text-lg">
            <FaGithub />
          </span>
        </div>
      </div>
      <div>Home</div>
      <div className=" text-lg">
        <FaGithub />
      </div>
    </div>
  );
};

export default Navbar;
