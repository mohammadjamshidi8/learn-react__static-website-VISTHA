import React from 'react'

export default function CommentBox({image}) {
  return (
    <div className='w-[300px] h-[300px]'>
        <img className='w-full h-full' src={image} alt="" />
    </div>
  )
}
