import React, { useState } from "react";
import heroimg from "../images/heroimg.svg";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-center bg-[#F5F5F5] pt-16">
      <div className="flex flex-row justify-center align-center items-center bg-gradient-to-r from-[#F5F5F5] to-[#F5F5F5] opacity-[74.83%] h-[664px] w-[100%] max-w-[1440px]">
        <section className="py-10 sm:py-16 lg:py-[px]">
          <div className="ml-[35px] max-w-[1405px] sm:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-[56px]">
                  Fast. Efficient.
                  <div className="relative inline-flex">
                    <h1 className="relative text-4xl font-bold text-[#F4B718] sm:text-6xl lg:text-[56px]">
                      & Cost Effective.
                    </h1>
                  </div>
                </h1>

                <p className="font-poppins max-w-[481px] mt-8 lg:text-[24px]  text-black sm:text-xl">
                  Get the app and enjoy an accessible <br />
                  and enjoyable interaction with swift responses
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-between h-[63px] w-auto px-[7px] py-[7px] text-[16px] font-semibold text-white transition-all duration-200 bg-[#000000] hover:bg-[#F4B718] focus:bg-[#F4B718]"
                    role="button"
                  >
                    <span className="text-[40px] px-4">
                      <FaApple />
                    </span>
                    <span className="flex flex-col items-center">
                      <p className="text-[16px]">Download on the</p>
                      <p className="text-[24px]">App Store</p>
                    </span>
                  </a>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-between h-[63px] w-auto px-[7px] py-[7px] text-[16px] font-semibold text-white transition-all duration-200 bg-[#000000] hover:bg-[#F4B718] focus:bg-[#F4B718]"
                    role="button"
                  >
                    <span className="text-[36px] px-4">
                      <FaGooglePlay />
                    </span>
                    <span className="flex flex-col items-center">
                      <p className="text-[16px]">Get it on</p>
                      <p className="text-[24px]">Google Play</p>
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <img className="w-full" src={heroimg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
