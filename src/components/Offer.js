import React from "react";
import offer from "../images/offer.png";
import { FaYoutube } from "react-icons/fa";

function Offer() {
  return (
    <section className="flex justify-center bg-[#F5F5F5]">
      <div className=" max-w-[1440px] px-[45px] py-[48px] flex flex-row bg-[#F5F5F5] ">
        <div className="flex flex-row">
          <div className="max-w-[506px]">
            <img src={offer} />
            <span className="relative bottom-[50%] left-[40%] text-[109px] text-[#DC0D18] md:text-8xl sm:text-4xl ">
              <FaYoutube />
            </span>
          </div>
          <div className="max-w-[674px] ml-[85px]">
            <h2 className=" w-[351px] font-Montserrat font-semibold text-black mb-[20px] sm:text-6xl lg:text-[40px]">
              What We
              <span className="relative text-4xl font-roboto font-semibold pl-[10px] text-[#F4B718] sm:text-6xl lg:text-[40px]">
                Offer
              </span>
            </h2>
            <p className="font-poppins text-[24px] font-normal text-[#131313]">
              We provide you with a reliable logistics services, and give you
              real-time updates about the location of your package <br />
              <br /> With your sensitive items, you’re rest assured they would
              be handled with utmost care and not be tampered with <br /> <br />{" "}
              RouteRider app allows you track your goods until they get
              delivered <br /> <br />
              open communication channels with the driver to ease your anxiety
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
