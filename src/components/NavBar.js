import { React, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section className="fixed z-20 left-0 top-0 right-0 bg-black">
      <div className="flex  justify-between items-center h-20 mx-auto max-w-[1280px] px-4 text-white">
        <h1 className="text-[#38F2AE] text-3xl md:text-3xl w-full">
          MOTO<span className="text-[#04BF9D]">WISE</span>
        </h1>
        <div className="space-x-6 text-lg hidden font-semibold md:block">
          <Link to="#Home" className="hover:text-[#04BF9D] duration-300" smooth>
            Home
          </Link>
          <Link
            to="#Products"
            className="hover:text-[#04BF9D] duration-300"
            smooth
          >
            Products
          </Link>
          <Link
            to="#About"
            className="hover:text-[#04BF9D] duration-300"
            smooth
          >
            About
          </Link>
          <Link
            to="#Contact"
            className="hover:text-[#04BF9D] duration-300"
            smooth
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex  space-x-2 pl-8">
            <TiSocialFacebook size={25} />
            <TiSocialInstagram size={25} />
            <TiSocialTwitter size={25} />
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed flex  flex-col z-10  p-2 top-0 left-0 w-[60%] border-r uppercase duration-500  ease-in-out border-r-gray-900 bg-black h-full "
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-[#38F2AE] text-3xl w-full px-3 pb-8 pt-4">
            Moto<span className="text-[#04BF9D]">Wise</span>
          </h1>
          <Link to="#Home" className="border-b p-4 border-b-gray-800" smooth>
            Home
          </Link>
          <Link
            to="#Products "
            className="border-b p-4 border-b-gray-800"
            smooth
          >
            Products
          </Link>
          <Link to="#About" className="border-b p-4 border-b-gray-800" smooth>
            About
          </Link>
          <Link to="#Contact" className="p-4" smooth>
            Contact
          </Link>
          <div className="flex space-x-6 p-2 pt-10">
            <TiSocialFacebook size={25} />
            <TiSocialInstagram size={25} />
            <TiSocialTwitter size={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
