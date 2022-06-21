import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);
const breakpoint = {
    768:{
        slidesPerView:6 ,

    },
    // 768:{
    //     slidesPerView: 3,
    // },
    // 640: {

    //     slidesPerView: 3,
    // },
    320: {
        slidesPerView: 3,
    },
      // when window width is >= 480px
      // when window width is >= 640px
    
}
export const Slider= ({list,id})=> {
    return(
        <div className="py-6">
            <Swiper draggable  slidesPerView="auto" speed={800} loop autoplay={{delay:800, disableOnInteraction: false,}}  breakpoints={breakpoint}>
                {list.map(slide=>(
                    id===1?
                    <SwiperSlide  key={slide}>
                        <img src={slide} alt="slider images"/>
                    </SwiperSlide>:
                    <SwiperSlide key={slide.url}>
                        <div className="flex flex-col justify-center  px-0.5">
                            <img className="border-4 border-white" src={slide.url} alt="slider images"/>
                            <h2 className="pb-4 font-bold text-base sm:text-xl color-title font-poppins">{slide.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
      
            </Swiper>
        </div>
    );
}