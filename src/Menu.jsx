import React from "react";
import logo from "./assets/logo.png";

export default function Menu() {
  const expandMobileMenu = (e) => {
    const mobileMenuWrapper = e.target.nextElementSibling;

    mobileMenuWrapper.classList.toggle("h-0");
    mobileMenuWrapper.classList.toggle("h-[350px]");
  };

  return (
    <>
      <div className="absolute top-0 right-0 w-full mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-gray-200 opacity-80 "
            fill-opacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,133.3C840,96,960,64,1080,64C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-full mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-gray-100 opacity-60"
            fill-opacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,160C840,160,960,96,1080,64C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative responsive pt-3 flex justify-between bg-transparent z-50">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex items-center">
          <svg
            onClick={expandMobileMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer xl:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* mobile menu list start */}

          <ul
            id="mobile-menu"
            className="absolute transition-all duration-500 top-20 right-0 w-full bg-white bg-opacity-90 flex flex-col gap-y-4 items-center overflow-hidden h-0 xl:hidden z-50"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">our services</a>
            </li>
            <li>
              <a href="#">price</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">customer review</a>
            </li>
            <li className="flex items-center transition-colors duration-200 cursor-pointer text-white bg-sabz px-5 hover:bg-sabzTire py-2 rounded-full">
              <a href="#" className="flex items-center gap-x-3">
                call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
            </li>
          </ul>

          {/* mobile menu list ends */}

          {/* desktop menu list start */}
          <ul
            id="desktop-menu"
            className="hidden xl:flex items-center gap-x-10 capitalize"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">our services</a>
            </li>
            <li>
              <a href="#">price</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">customer review</a>
            </li>
            <li className="flex items-center transition-colors duration-200 cursor-pointer text-white bg-sabz px-5 hover:bg-sabzTire py-2 rounded-full">
              <a href="#" className="flex items-center gap-x-3">
                call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
            </li>
          </ul>
          {/* desktop menu list ends */}
        </div>
      </div>
    </>
  );
}
