"use client";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import Lenis from "lenis";
import Template from "@/components/pages/Template";
import Githubrep from "@/components/pages/Githubrep";
import { Link } from "react-scroll";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className=" h-full">
      <div className="flex text-xs p-6  h-full  items-center justify-between  md:py-20">
        <div className="relative z-[20]  flex place-items-center  before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01c321] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]" />

        <div className=" z-30 flex-1">
          <div className=" space-y-2">
            <div className=" group w-fit cursor-pointer flex items-center gap-3">
              Get Started
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </div>

            <p className=" text-xl font-bold">
              Build your ReadMe file with{" "}
              <span className=" italic text-green-400">SUPERPOWER</span>
            </p>
            <div className="  text-xs flex text-gray-300 items-center space-x-3">
              <p>YOUR</p>{" "}
              <span className=" text-lg">
                <FaGithub />
              </span>
              <p> PROFILE NEED SOME DESIGN</p>
            </div>
            <div>
              <Link
                smooth
                duration={500}
                to="template"
                className=" cursor-pointer"
              >
                <button className=" bg-[#182A2A] text-[#cbcbcb] hover:text-black p-2 rounded-sm font-semibold  hover:bg-gray-200 group flex items-center gap-2 transition">
                  Template{" "}
                  <span className="relative overflow-hidden h-fit w-fit">
                    <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                    <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:block hidden flex-1 h-full w-full bg-[#0a0a0a] rounded-lg z-20">
          <Githubrep />
        </div>
      </div>
      <div id="template">
        <Template />
      </div>
    </div>
  );
}
