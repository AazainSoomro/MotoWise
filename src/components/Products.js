import React from "react";
import helmet1 from "../assets/helmet1.png";
import helmet2 from "../assets/helmet2.png";
import helmet3 from "../assets/helmet3.png";

const Products = () => {
  return (
    <section id="Products" className="text-black py-32 px-8">
      <div className="max-w-[1280px] mx-auto ">
        <div className="px-10 flex  justify-end md:justify-between py-2 flex-wrap items-center">
          <div>
            <h1 className=" text-4xl md:text-6xl py-2  text-[#04BF9D] ">
              OUR COLLECTION
            </h1>
            <p className="text-md text-green-100">Choose your style.</p>
          </div>
          <button className="px-6 py-2 lg:my-0 my-6 border-y text-[#04BF9D] font-semibold rounded-md border-y-[#04BF9D] hover:bg-[#04BF9D] hover:text-black duration-300 ease-in-out">
            VIEW MORE
          </button>
        </div>
        <div className="py-20 flex flex-wrap px-10 item-center justify-between ">
          <div className="w-80  my-8  shadow-[#347355] shadow-lg hover:scale-105 duration-300   bg-[#38F2AE] rounded-lg p-6 flex flex-col">
            <p className="text-3xl py-6 font-bold">V60 SOLID WHITE KNIGHT</p>
            <img src={helmet3} className="py-4" />
            <button className="px-6 py-2 self-end mt-4 border-y font-semibold rounded-md border-y-black hover:bg-black hover:text-[#04BF9D] duration-300 ease-in-out">
              VIEW MORE
            </button>
          </div>
          <div className="w-80  my-8 shadow-[#347355] shadow-lg hover:scale-105 duration-300   bg-[#38F2AE]  rounded-lg p-6 flex flex-col">
            <p className="text-3xl py-6 font-bold">RPHA 11 PRO TOOTHLESS</p>
            <img src={helmet2} className="py-4" />
            <button className="px-6 py-2 self-end mt-4 border-y font-semibold rounded-md border-y-black hover:bg-black hover:text-[#04BF9D] duration-300 ease-in-out">
              VIEW MORE
            </button>
          </div>
          <div className="w-80  my-8 shadow-[#347355] shadow-lg hover:scale-105 duration-300   bg-[#38F2AE]  rounded-lg p-6 flex flex-col">
            <p className="text-3xl py-6 font-bold">RPHA 11 PRO GHOST C.O.D</p>
            <img src={helmet1} className="py-4" />
            <button className="px-6 py-2 self-end mt-4 border-y font-semibold rounded-md border-y-black hover:bg-black hover:text-[#04BF9D] duration-300 ease-in-out">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
      <div className="  shadow-[#347355] shadow-lg  border-[#38F2AE]  p-2 max-w-[800px] mx-auto bg-black rounded-xl mt-20">
        <div className=" flex flex-col rounded-md mb-4 space-y-4 items-center">
          <h1 className="text-2xl text-white font-bold">JOIN OUR NEWSLETTER</h1>
          <div className="w-3/4">
            <input
              className="py-2 w-full rounded-md outline-none focus:ring-[#38F2AE] m-2 bg-zinc-800 text-center focus:ring-2 "
              placeholder="Enter Your Email"
            />
          </div>
          <p className="text-xs text-white lowercase m-2">
            BY PROVIDING YOUR E-MAIL, YOU AGREE TO RECEIVE THE NEWSLETTER AND
            ACKNOWLEDGE THAT YOU HAVE READ OUR PRIVACY POLICY.
          </p>
          <button className="text-white  text-start hover:bg-[#38F2AE] border-y-[#38F2AE] border-y hover:text-black hover:border-black transition duration-500 font-semibold bg-black px-4 py-2 rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
