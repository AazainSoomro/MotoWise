import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const Footer = () => {
  return (
    <section className=" bg-[#38F2AE] h-full py-16">
      <div className="flex lg:flex-row flex-col justify-between max-w-[1280px] mx-auto p-4">
        <div className="pb-6">
          <h1 className="text-black  text-3xl md:text-3xl font-bold w-full">
            MOTO<span className="font-semibold">WISE</span>
          </h1>
          <p className="text-sm ">F-8 Sector, Islamabad, Pakistan</p>
          <div className="flex space-x-8 pt-6 lg:pt-20">
            <TiSocialFacebook size={25} />
            <TiSocialInstagram size={25} />
            <TiSocialTwitter size={25} />
          </div>
        </div>

        <div className="pb-6">
          <h1 className="font-extrabold pb-2 ">PRODUCTS</h1>
          <ul className="font-semibold">
            <li>RPHA SERIES</li>
            <li>FULL FACE</li>
            <li>MODULAR</li>
            <li>OPEN FACE</li>
            <li>OFF ROAD</li>
          </ul>
        </div>
        <div className="pb-6">
          <h1 className="font-extrabold pb-2 ">MEDIA</h1>
          <ul className="font-semibold">
            <li>NEWS</li>
            <li>VIDEO</li>
            <li>CATALOG</li>
            <li>NEWSLETTER</li>
          </ul>
        </div>
        <div className="pb-6">
          <h1 className="font-extrabold pb-2 ">COMPANY</h1>
          <ul className="font-semibold">
            <li>RABOUT US</li>
            <li>CONTACT US</li>
            <li>WARRANTY</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="pb-6">
          <h1 className="font-extrabold pb-2 ">DEALERS</h1>
          <ul className="font-semibold">
            <li>DISTRIBUTION</li>
            <li>DEALERS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
