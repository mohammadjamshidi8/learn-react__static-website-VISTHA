import React from "react";
import aboutImage from "./assets/about-us.svg";

export default function AboutUs() {
  return (
    <div className="bg-lightPurple py-10 mt-10">
      <div className="responsive flex flex-col lg:flex-row lg:justify-between lg:gap-x-10 items-center gap-y-7">
        <div className="lg:w-1/2 hidden md:block">
          <img src={aboutImage} className="aspect-video object-contain" alt="" />
        </div>

        <div className="lg:w-1/2 flex flex-col lg:justify-end gap-y-5">
          <span className="text-black text-opacity-70">About Vista</span>

          <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-black text-primary">
            Professional website design for you
          </h2>

          <span className="lg:text-lg">
            Lorem Epsom is a fake text with the production of incomprehensible
            simplicity from the printing industry, and with the use of graphic
            designers, printers and texts, but also newspapers and magazines in
            columns and lines as necessary, and for the current conditions of
            the technology required, and diverse applications with the aim of
            improving the tools It is practical, many books in sixty-three
            percent of the past, present and future require a lot of knowledge
            from the society and experts, to create more knowledge for computer
          </span>

          <button className="flex gap-x-1 items-center bg-sabz self-center lg:self-start px-6 py-3 rounded-full  hover:bg-sabzTire hover:text-white transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
            our services
          </button>
        </div>
      </div>
    </div>
  );
}
