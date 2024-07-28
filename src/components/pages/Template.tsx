import React from "react";

const Template = () => {
  return (
    <section className="mx-auto  z-10 h-screen sm:py-24 max-w-5xl md:max-w-7xl relative rounded-3xl mt-2  flex flex-col items-center">
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
  );
};

export default Template;
