import React from 'react'

export default function ServiceBox({icon,title,text}) {


  return (
    <div className="relative flex flex-col items-start gap-y-6 transition duration-700 bg-gray-200 p-5 rounded-xl hover:bg-green-100 cursor-pointer hover:-translate-y-4 overflow-hidden group z-20">
      <div className='absolute transition-all duration-700 right-0 left-0 w-full top-20 h-0 bg-green-500 bg-opacity-20 skew-y-12 group-hover:h-[90%] z-10'></div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 transition-colors duration-700 text-sabz z-20 group-hover:text-primary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={icon}
        />
      </svg>
      </div>

      <div>
        <h3 className='text-primary transition-colors duration-700 group-hover:text-black font-black text-xl z-50'>{title}</h3>
      </div>

      <div>
        <span>{text}</span>
      </div>

  </div>
  )
}
