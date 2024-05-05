import React, { useRef, useState } from 'react';
import CommentBox from './components/CommentBox';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Comments() {


    const commentInfo = [
        {id: 1, image: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/5.svg?short_path=c5fcea2'}
    ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <CommentBox/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
}
