import React from "react";
import home from "../assets/home2.jpg";
import Typed from "react-typed";
const Home = () => {
  return (
    <section id="Home" className="text-white  ">
      <div className="relative">
        <img src={home} className="h-screen w-screen object-none object-top" />
      </div>
      <div className="flex justify-center ">
        <div className="absolute  w-full max-w-[1280px] flex flex-col  top-[40%] px-8  ">
          <h1 className="text-[#38F2AE] text-5xl md:text-7xl w-full">
            MOTO<span className="text-[#04BF9D]">WISE</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 pt-2">
            Head Safety first
          </p>
          <Typed
            className="text-3xl md:text-5xl pt-6"
            strings={["Don’t end up dead, protect your head."]}
            typeSpeed={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
