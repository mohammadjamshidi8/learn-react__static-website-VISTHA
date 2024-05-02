import React from "react";

export default function Prices() {
  return (
    <div className="py-14">
      <div className="responsive flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-5">
          <h2 className="text-3xl font-black text-primary">Prices</h2>

          <span className="tracking-widest text-center text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            quas.
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:gap-y-0 md:items-center lg:w-9/12 md:mx-auto">
          <div className="md:w-1/3">
            <input
              type="radio"
              name="price-card"
              id="card1"
              className="opacity-0 invisible peer"
            />
            <label
              for="card1"
              className="flex flex-col transition-colors duration-300 items-center gap-y-4 px-4 py-6 rounded-md bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white group"
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold">Free</span>

              <ul className="flex flex-col gap-y-2 text-sm items-center text-center">
                <li>Website design </li>
                <li className="">24 hour support</li>
                <li className="">Exclusive design</li>
                <li className="">face-to-face meeting</li>
              </ul>

              <button className="px-8 py-2 rounded-full bg-transparent border-[2px] border-white hover:scale-105">
                Order
              </button>
            </label>
          </div>

          <div className="md:w-1/3">
            <input
              type="radio"
              name="price-card"
              id="card2"
              className="opacity-0 invisible peer"
            />
            <label
              for="card2"
              className="flex flex-col transition-colors duration-300 items-center gap-y-4 px-4 py-6 rounded-md bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white group"
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold">100 $</span>
              <ul className="flex flex-col gap-y-2 text-sm items-center text-center">
                <li>Unlimited requests</li>
                <li className="">24 hour support</li>
                <li className="">Exclusive design</li>
                <li className="">face-to-face meeting</li>
              </ul>

              <button className="px-8 py-2 rounded-full bg-transparent border-[2px] border-white hover:scale-105">
                Order
              </button>
            </label>
          </div>

          <div className="md:w-1/3">
            <input
              type="radio"
              name="price-card"
              id="card3"
              className="opacity-0 invisible peer"
            />
            <label
              for="card3"
              className="flex flex-col transition-colors duration-300 items-center gap-y-4 px-4 py-6 rounded-md bg-gray-200 peer-checked:bg-blue-600 peer-checked:text-white group"
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold">300 $</span>
              <ul className="flex flex-col gap-y-2 text-sm items-center text-center">
                <li>Unlimited requests</li>
                <li className="">24 hour support</li>
                <li className="">Exclusive design</li>
                <li className="">face-to-face meeting</li>
              </ul>

              <button className="px-8 py-2 rounded-full bg-transparent border-[2px] border-white hover:scale-105">
                Order
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
