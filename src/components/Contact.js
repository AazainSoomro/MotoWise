import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="text-white py-28">
      <div className="mx-4">
        <h1 className=" text-4xl md:text-6xl text-center  text-[#04BF9D] py-8">
          Wanna Talk?
        </h1>
        <form className="flex flex-col space-y-6 max-w-[800px] mx-auto border border-[#38F2AE] rounded-3xl p-10 shadow-lg shadow-[#38F2AE]">
          <div>
            <label className="text-[#38F2AE] text-lg font-semibold">Name</label>

            <input
              placeholder="Your Name"
              className="ring-1 ring-zinc-800 mt-1 w-full bg-zinc-800 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#38F2AE]"
            ></input>
          </div>
          <div>
            <label className="text-[#38F2AE] text-lg font-semibold">
              Email
            </label>

            <input
              placeholder="Your Email"
              className="ring-1 ring-zinc-800 mt-1 w-full bg-zinc-800 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#38F2AE]"
            ></input>
          </div>
          <div>
            <label className="text-[#38F2AE] text-lg font-semibold">
              Message
            </label>

            <textarea
              placeholder="Your Message"
              className="ring-1 ring-zinc-800 mt-1 w-full bg-zinc-800 rounded-md px-4 py-2 pb-12 outline-none focus:ring-2 focus:ring-[#38F2AE]"
            ></textarea>
          </div>

          <button className="hover:bg-[#38F2AE] hover:text-black border-y duration-300 border-y-[#38F2AE] text-[#38F2AE] rounded-md py-2 px-4  inline-block self-end ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
