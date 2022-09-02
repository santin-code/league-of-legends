import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwipeCore, { EffectFade, Navigation, Pagination, Mousewheel } from "swiper";

import { Welcome } from '../components/home-section'

SwipeCore.use([Mousewheel, Pagination, EffectFade])

const Home = () => {
  return (
    <>
          <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
        speed={1000 }
        mousewheel={true}
        navigation={true}
        pagination={true}
        modules={[EffectFade, Navigation, Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          slide 1
        </SwiperSlide>
        <SwiperSlide>
          slide 2
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home