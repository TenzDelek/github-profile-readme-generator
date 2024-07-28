import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
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

      <div className=" flex gap-2 items-center">
        <Link
          className=" flex items-center gap-2 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/TenzDelek/github-profile-readme-generator"
        >
          Give us a Star <FaGithub className=" text-lg" />
        </Link>
        <SignedOut>
          <div className=" border p-2 rounded hover:bg-white transition hover:text-black">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <div className=" border p-2 rounded hover:bg-white transition hover:text-black">
            <SignOutButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
