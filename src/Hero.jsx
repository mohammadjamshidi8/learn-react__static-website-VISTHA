import React from "react";
import hero from "./assets/hero.svg";

export default function Hero() {
  return (
    <div className="responsive mt-10 md:mt-20 flex flex-col lg:flex-row-reverse gap-y-7 md:items-center md:justify-between md:gap-x-7">
      <div className="w-11/12 mx-auto">
        <img src={hero} className="aspect-video object-contain" alt="" />
      </div>
      <div className="flex flex-col gap-y-7 w-11/12 mx-auto items-center">
        <h1 className="text-center text-2xl lg:text-4xl lg:text-left md:text-5xl 2xl:text-5xl font-bold text-primary z-50">
          Vista e-commerce company in the field of website design
        </h1>
        <span className="text-center lg:text-left md:text-lg">
          Lorem Ipsum is a fake text with incomprehensible simplicity produced
          by the printing industry and using graphic designers.
        </span>
        <div className="flex gap-x-1 items-center transition duration-1000">
          <button className="px-5 md:px-10 py-2 md:py-4 bg-sabz border-[2px] border-transparent rounded-full text-center">
            our services
          </button>
          <button className="px-5 md:px-10 py-2 md:py-4 bg-white rounded-full border-[2px] border-sabz">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
}
