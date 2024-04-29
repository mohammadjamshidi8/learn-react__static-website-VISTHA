import React from "react";
import logo from "./assets/logo.png";

export default function Menu() {

  const expandMobileMenu = (e) => {
    const mobileMenuWrapper = e.target.nextElementSibling

    mobileMenuWrapper.classList.toggle('h-0')
    mobileMenuWrapper.classList.toggle('h-[350px]')
  }

  return (
    <div className="responsive pt-3 flex justify-between relative z-50">
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
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>

        {/* mobile menu list start */}

        <ul id="mobile-menu" className="absolute transition-all duration-500 top-20 right-0 w-full bg-rose-200 flex flex-col gap-y-4 items-center overflow-hidden h-0 xl:hidden">
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
  );
}