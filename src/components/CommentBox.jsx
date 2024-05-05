import React from "react";

export default function CommentBox({ image }) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 bg-white">
      <img
        className="aspect-square mix-blend-multiply object-contain lg:w-1/2"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-y-3 p-5 lg:w-1/2 lg:justify-center lg:gap-y-6">
        <span className="text-black text-opacity-60 lg:text-lg">Customers comments</span>
        <h2 className="text-2xl font-black text-primary lg:text-4xl">
          Lorem ipsum dolor sit.
        </h2>
        <span className="lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deleniti,
          blanditiis necessitatibus quod minus molestias recusandae placeat
          voluptatem distinctio asperiores, libero autem quisquam unde modi
          itaque, quibusdam numquam nostrum exercitationem.
        </span>
        <div className="flex gap-x-1 items-center self-start px-6 py-2 bg-primary bg-opacity-20 border-l-8 border-primary text-primary ">
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <button className="font-bold">
            Mohamad jamshidi
          </button>
        </div>
      </div>
    </div>
  );
}
