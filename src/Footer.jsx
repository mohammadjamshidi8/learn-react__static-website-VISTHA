import React from "react";

export default function Footer() {
  return (
    <div className="bg-primary pt-20 pb-3 text-white relative overflow-hidden">
      <div className="responsive relative flex flex-col gap-y-20">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-y-5">
          {/* quick access start */}
          <div className="flex flex-col gap-y-3 lg:w-1/3 z-50">
            <h4 className="font-bold text-2xl">quick access</h4>
            <ul className="w-max flex flex-col gap-y-2">
              <li className="transition duration-200 hover:translate-x-3">
                <a href="#" className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <span>about us</span>
                </a>
              </li>
              <li className="transition duration-200 hover:translate-x-3">
                <a href="#" className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <span>our services</span>
                </a>
              </li>
              <li className="transition duration-200 hover:translate-x-3">
                <a href="#" className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <span>prices</span>
                </a>
              </li>
              <li className="transition duration-200 hover:translate-x-3">
                <a href="#" className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  <span>blog</span>
                </a>
              </li>
            </ul>
          </div>
          {/* quicl access ends */}

          {/* footer call section start */}

          <div className="flex flex-col gap-y-3 lg:w-1/3 z-50">
            <h4 className="font-bold text-2xl">call</h4>
            <div className="flex flex-col gap-y-3">
              <span>United Kingdom,Cumbria,Ulverston34 Queen St</span>
              <span>09305065194</span>
              <span>yourmail@yourdomain.com</span>
            </div>
          </div>

          {/* footer call section ends */}

          {/* footer social media start */}

          <div className="flex flex-col gap-y-3 lg:w-1/3 lg:items-end">
            <h4 className="font-bold text-2xl">social media</h4>
            <div className="flex gap-x-4">
              <a href="#">
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
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </a>

              <a href="#">
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
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </a>

              <a href="#">
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
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </a>

              <a href="#">
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
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* footer social media ends */}
        </div>

        <div className="flex justify-center z-50">All rights are reserved for Vista Company</div>
      </div>


      <div className="w-full absolute bottom-0">
      <svg className="fill-blue-500 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,80C672,53,768,43,864,85.3C960,128,1056,224,1152,245.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="w-full absolute bottom-0">
      <svg className="fill-blue-600 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,208C672,192,768,192,864,197.3C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}
