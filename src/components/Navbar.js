import React, { useState } from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className=" flex justify-center w-[100%] bg-white ">
      <div className=" fixed  z-10 overflow-hidden w-[100%] font-raleway bg-white pt-[17px]">
        <header className="">
          <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-[45px]">
            <div className="flex items-center justify-between h-16 lg:h-[118px] ">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto h-[78px]"
                    src={Logo}
                    alt="route rider logo"
                  />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 ">
                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-[#023047] transition-all duration-200 hover:text-[#2865AA]"
                >
                  Home
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-[#023047] transition-all duration-200 hover:text-[#2865AA]"
                >
                  About Us
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base font-semibold text-[#023047] transition-all duration-200 hover:text-[#2865AA]"
                >
                  How it works
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center h-[51px] w-auto px-[41px] py-[15px] rounded-[10px] text-[18px] bg-[#023047] font-semibold text-white border-2 border-[#023047] hover:bg-[#2865AA] hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                  role="button"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
