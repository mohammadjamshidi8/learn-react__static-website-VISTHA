import React from "react";
import contactImage from "./assets/contact.jpg";

export default function ContactUs() {
  return (
    <div className="bg-lightPurple py-20">
      <div className="responsive flex flex-col gap-y-4">

        <div className="flex flex-col gap-y-5 md:flex-row md:justify-between md:items-center md:gap-x-5">
          <div className="md:w-1/2 flex flex-col gap-y-4 items-start">
            <h2 className="text-3xl  xl:text-5xl 2xl:text-6xl font-black text-primary">
              Contact us
            </h2>

            <span className="tracking-widest text-left text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quas.
            </span>
            <img
              src={contactImage}
              className="aspect-square object-contain mix-blend-multiply"
              alt=""
            />
          </div>

          <form
            className="flex flex-col p-5 gap-y-4 items-center bg-white rounded-lg overflow-hidden shadow-xl drop-shadow-xl"
            action=""
          >
            <div className="w-11/12 space-y-2">
              <label htmlFor="name" className="text-primary font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border-[1px] border-green-500 rounded-md p-2 outline-none"
              />
            </div>

            <div className="w-11/12 space-y-2">
              <label htmlFor="phone" className="text-primary font-semibold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="w-full border-[1px] border-green-500 rounded-md p-2 outline-none"
              />
            </div>

            <div className="w-11/12 space-y-2">
              <label htmlFor="email" className="text-primary font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border-[1px] border-green-500 rounded-md p-2 outline-none"
              />
            </div>

            <div className="w-11/12 space-y-2">
              <label htmlFor="text" className="text-primary font-semibold">
                Text
              </label>
              <textarea
                name="text"
                id="text"
                className="w-full border-[1px] border-green-500 rounded-md p-2 outline-none h-32"
              ></textarea>
            </div>

            <div className="self-start ml-2">
              <button className="px-6 py-2 rounded-full bg-sabz hover:bg-sabzTire transition-colors duration-200 hover:text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
