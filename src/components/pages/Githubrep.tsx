import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Githubrep = () => {
  return (
    <div className=" p-4 flex items-center justify-between">
      <div className=" flex items-center gap-2">
        <div className=" group cursor-pointer p-2 border w-fit rounded border-gray-600">
          <RxHamburgerMenu className=" text-gray-300 group-hover:text-white" />
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub className=" text-lg" />
          {/* soon username from clerk current dummy */}
          <p>Tenzin Delek</p>
        </div>
      </div>

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Githubrep;
