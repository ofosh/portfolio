import React from "react";
import { assets } from "../assets";
import { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMenuFold2Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const toggleMode = () => {
    theme == "light"
      ? setTheme(<RiCloseLargeFill />)
      : setTheme(<RiMenuFold2Fill />);
  };
  useEffect(() => {
    if (showMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobile]);

  return (
    <div className="container overflow-hidden max-w-full fixed top-0 left-0 z-10 py-5 px-7 lg:py-4 bg-white">
      <div className="flex items-center justify-between">
        <img src={assets.logo} alt="" className="w-[150px] lg:w-[190px]" />
        <ul className="lg:flex items-center justify-center hidden ">
          <li className="inline-block text-lg text-black font-medium ml-4 transition-all hover:text-orange-500">
            <a href="#Home" className="ml-4">
              Home
            </a>
          </li>
          <li className="inline-block text-lg text-black font-medium ml-4 transition-all hover:text-orange-500">
            <a href="#About" className="ml-4">
              About
            </a>
          </li>
          <li className="inline-block text-lg text-black font-medium ml-4 transition-all hover:text-orange-500">
            <a href="#Services" className="ml-4">
              Services
            </a>
          </li>
          <li className="inline-block text-lg text-black font-medium transition-all ml-4 hover:text-orange-500">
            <a href="#Projects" className="ml-4">
              Projects
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="px-8 text-white font-semibold text-md bg-blue-900 py-4 cursor-pointer rounded-full hidden lg:flex hover:bg-white hover:text-blue-800 transition-all hover:outline">
            <FaPhoneVolume className=" w-16 text-blue-500 text-2xl" /> Let's
            Talk
          </button>
          <RiMenuFold2Fill
            className={`${
              showMobile == "light" ? <RiCloseLargeFill /> : <RiMenuFold2Fill />
            } ml-2 text-5xl text-blue-950 md:hidden`}
            onClick={() => setShowMobile(true)}
          />
        </div>
        {/* mobile menu */}
        <div
          className={`${
            showMobile ? "fixed w-full" : "w-0 h-0"
          } fixed w-full right-0 top-0 bottom-0  overflow-hidden mt-4 px-4  transition-all`}
        >
          <div className="flex justify-end px-3 items-center">
            <RiCloseLargeFill
              className="mt-3 text-blue-950 text-5xl cursor-pointer duration-300"
              onClick={() => setShowMobile(false)}
            />
          </div>
          <ul className="lg:hidden items-end flex flex-col max-w-full px-5 py-8 bg-blue-700  text-lg">
            <li className="inline-block text-lg text-white border-b-2 w-full text-right font-medium ml-4 transition-all hover:text-orange-500">
              <a href="#Home" className="ml-4">
                Home
              </a>
            </li>
            <li className="inline-block text-lg text-white border-b-2 w-full text-right font-medium ml-4 transition-all hover:text-orange-500 mt-4">
              <a href="#About" className="ml-4">
                About
              </a>
            </li>
            <li className="inline-block text-lg text-white border-b-2 w-full text-right font-medium ml-4 transition-all mt-4 hover:text-orange-500">
              <a href="#Services" className="ml-4">
                Services
              </a>
            </li>
            <li className="inline-block text-lg text-white border-b-2 w-full text-right mt-4 font-medium transition-all ml-4 hover:text-orange-500">
              <a href="#Projects" className="ml-4">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
