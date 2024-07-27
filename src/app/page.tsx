"use client";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import Lenis from "lenis";
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
      <div className="flex text-xs  h-full  items-center justify-between p-6 md:p-24">
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01c321] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]" />

        <div className=" flex-1">
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

            <button className=" bg-[#182A2A] text-[#cbcbcb] hover:text-black p-2 rounded-sm font-semibold  hover:bg-gray-200 group flex items-center gap-2 transition">
              Template{" "}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </button>
          </div>
        </div>
        <div className=" md:block hidden flex-1 h-full">hello</div>
      </div>

      <section className="mx-auto  h-screen sm:py-24 max-w-5xl md:max-w-7xl relative rounded-3xl mt-2  flex flex-col items-center">
        <div
          className="left-1/2 top-0 border-teal-200 w-full  rounded-lg center pointer-events-none absolute h-[1px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute   left-1/2 -top-1 w-full h-[400px] max-w-[200px] md:max-w-[400px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
          }}
        />
      </section>
    </div>
  );
}
