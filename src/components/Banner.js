import React from "react";

function Banner() {
  return (
    <div className="flex flex-row justify-center w-[100%] bg-[#F4B718] py-[23px]">
      <div className=" w-[1440px] h-[137px] bg-[#F4B718]">
        <div className="max-w-[1350px] flex flex-row items-center justify-between px-[30px]">
          <div>
            <p className="font-Montserrat text-[24px] font-medium">
              Do you have a vehicle and you want to
            </p>
            <h1 className="font-montserrat text-[50px] font-semibold">
              MAKE EXTRA INCOME
            </h1>
          </div>
          <div>
            <a
              href="#"
              title=""
              className=" px-[55px] py-[16px] mt-4  text-[24px] font-roboto font-medium text-black transition-all duration-200 bg-white  rounded-[5px] hover:opacity-80 focus:opacity-80"
              role="button"
            >
              Register as a transporter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
