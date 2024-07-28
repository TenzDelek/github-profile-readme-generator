import { SignedIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { GoRepo } from "react-icons/go";
import { GoProjectTemplate } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";
import { Link } from "react-scroll";
const Githubrep = () => {
  const { user } = useUser();
  const details = [
    {
      logo: <HiOutlineBookOpen />,
      name: "Overview",
    },
    { logo: <GoRepo />, name: "Repository" },
    { logo: <GoProjectTemplate />, name: "Projects" },
    { logo: <FaRegStar />, name: "Stars" },
  ];
  return (
    <div className="  p-4 space-y-4">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <div className=" group cursor-pointer p-2 border w-fit rounded border-gray-600">
            <RxHamburgerMenu className=" text-gray-300 group-hover:text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className=" text-lg" />
            {/* soon username from clerk current dummy */}
            <p> {user?.firstName}</p>
          </div>
        </div>

        <div>
          <SignedIn>
            <Image
              src={user?.imageUrl as string}
              alt="image of the user"
              width={30}
              height={30}
              className=" rounded-full"
            />
          </SignedIn>
        </div>
      </div>
      <div className=" flex gap-4">
        {details.map((data, index) => (
          <div
            key={index}
            className=" flex items-center cursor-pointer p-2 transition rounded-md hover:bg-[#1f2125] gap-1"
          >
            {data.logo} {data.name}
          </div>
        ))}
      </div>
      <div className=" flex ">
        <div className="flex-2 flex flex-col items-center">
          <SignedIn>
            <Image
              src={user?.imageUrl as string}
              alt="image of the user"
              width={100}
              height={100}
              className=" rounded-full"
            />
            <p className=" mt-4 fontbold"> {user?.firstName}</p>
            <p className=" text-gray-600">@{user?.username}</p>
          </SignedIn>
        </div>
        <div className="flex-1 px-2  py-6 rounded ml-2 border-gray-700 border-[1px] ">
          <pre>README.MD</pre>
          <Link smooth duration={500} to="template" className=" cursor-pointer">
            <div className=" flex flex-col space-y-2 items-center justify-center w-full h-full">
              <PiPaintBrushBroadDuotone className=" hover:text-yellow-300 transition p-2 border text-4xl rounded-full" />
              <p>Bless me</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Githubrep;
