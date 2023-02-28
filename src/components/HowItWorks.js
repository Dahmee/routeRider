import React from "react";
import Image from "../images/image.svg";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="flex justify-center h-[2900px]  py-12">
      <div className=" max-w-[1440px] py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className=" sm:px-6 lg:pr-4 max-w-[100%]">
          <div className="px-[45px] max-w-[1350px]  text-left bg-white">
            <h2 className="text-[40px] font-semibold text-black font-montserrat  sm:text-4xl lg:text-[40px] xl:text-6xl">
              How it works
            </h2>
            <p className="mt-6 text-[20px] font-poppins font-normal text-[#222222]">
              Router Rides helps its users and anyone who need logistics. i.e
              moving of any of your properties or cargo from one particular{" "}
              <br />
              destination to the other at cheaper, affordable and convenient
              way. Our successful track records will speak about reliablity and{" "}
              <br />
              trustworthiness.
            </p>
          </div>

          <div className="max-w-[1395px] h-[395px] mx-auto mt-12 space-y-12 md:space-y-20 sm:mt-16 lg:mt-20">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-8">
              <div>
                <img className="w-full rounded-md" src={Image} alt="" />
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      State pickup address
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px]  text-[24px] font-[500px] text-gray-400">
                      Enter package details on app
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] font-poppins text-gray-400">
                      State if package has perishables / <br />
                      sensitive materials to enable extra care
                    </p>
                  </li>
                  <li className="flex flex-row items-end justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      Enter Drop-off address
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-8">
              <div className=" md:order-last">
                <img className="w-full  rounded-md" src={Image2} alt="" />
              </div>

              <div>
                <ul>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      State pickup addresssssssss
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px]  text-[24px] font-[500px] text-gray-400">
                      Enter package details on app
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] font-poppins text-gray-400">
                      State if package has perishables / <br />
                      sensitive materials to enable extra care
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      Enter Drop-off address
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-8">
              <div>
                <img className="w-full rounded-md" src={Image3} alt="" />
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      State pickup address
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px]  text-[24px] font-[500px] text-gray-400">
                      Enter package details on app
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] font-poppins text-gray-400">
                      State if package has perishables / <br />
                      sensitive materials to enable extra care
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      Enter Drop-off address
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-8">
              <div className="md:order-last">
                <img className="w-full rounded-md" src={Image3} alt="" />
              </div>

              <div>
                <ul>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      State pickup address
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px]  text-[24px] font-[500px] text-gray-400">
                      Enter package details on app
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] font-poppins text-gray-400">
                      State if package has perishables / <br />
                      sensitive materials to enable extra care
                    </p>
                  </li>
                  <li className="flex flex-row items-center justify-left">
                    <span>
                      <FaCheckCircle />
                    </span>
                    <p className="max-w-[489px] ml-[36px] text-[24px] font-[500px] text-gray-400">
                      Enter Drop-off address
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
