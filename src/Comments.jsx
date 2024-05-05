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
        {id: 1, image: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/3501570.jpg'},
        {id: 2, image: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/6988381.jpg'},
        {id: 3, image: 'https://raw.githubusercontent.com/mohammadjamshidi8/learn-react__static-website-VISTHA/main/src/assets/3501570.jpg'},
    ]

  return (
    <>
      <div className='py-20 bg-white'>
      <div className='responsive'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
            {commentInfo.map(item => (
                <SwiperSlide className='my-10'>
                <CommentBox key={item.id} {...item} />
                </SwiperSlide>
            ))}        
      </Swiper>
      </div>
      </div>
    </>
  );
}
