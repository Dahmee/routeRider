import React, { useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const Features = () => {
  return (
    <section className="flex justify-center items-center w-[100%]  bg-white sm:py-16">
      <div className="mx-auto absolute top-[680px] bg-transparent px-6  max-w-[1440px] sm:px-6 lg:px-8 ">
        <div className="bg-transparent flex flex-col items-center justify-center">
          <div className="relative grid max-w-lg grid-cols-1 gap-[56px] mx-auto md:max-w-none lg:gap-[56px] md:grid-cols-3">
            <div className=" bg-white rounded-[15px] h-[197px] w-[219px] flex flex-col align-center justify-center items-center shadow-2xl">
              <span className="text-[50.42px] text-[#023047]">
                <BsShieldFillCheck />
              </span>
              <h2>Reliable</h2>
            </div>
            <div className="bg-white rounded-[15px] h-[197px] w-[219px] flex flex-col align-center justify-center items-center shadow-2xl">
              <span className="text-[50.42px] rounded-[50%] text-white bg-[#023047]">
                <FaHandsHelping />
              </span>
              <h2>Thrustworthy</h2>
            </div>
            <div className="bg-white rounded-[15px] h-[197px] w-[219px] flex flex-col align-center justify-center items-center shadow-2xl">
              <span className="text-[50.42px] rounded-[50%] text-white bg-[#023047]">
                <MdDeliveryDining />
              </span>
              <h2>Delivery</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
