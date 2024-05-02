import React from "react";
import test from "../assets/test";

export default function BlogPost({img,title,category,date}) {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-200">
      <div className="overflow-hidden cursor-pointer">
        <img
          src={img}
          className="transition duration-500 bg-cover hover:scale-125 hover:rotate-6"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-4 p-5">
        <span className="font-black text-primary">
          <a href="#">{title}</a>
        </span>
        <div className="flex justify-between">
          <button className="text-xs px-5 py-1 border-[2px] border-green-500 bg-green-100 text-green-900 rounded-md">
            {category}
          </button>
          <button className="text-xs px-5 py-1 border-[2px] border-blue-500 bg-blue-100 text-blue-900 rounded-md">
            {date}
          </button>
        </div>
      </div>
    </div>
  );
}
