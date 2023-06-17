import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "../styles/Slider.css";

//IMAGENES
import primera from "../assets/img/foto.png"
import segunda from "../assets/img/foto (2).png"
import tercera from "../assets/img/foto (3).png"


function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={primera} alt="primera" /></SwiperSlide>
        <SwiperSlide><img src={segunda} alt="primera" /></SwiperSlide>
        <SwiperSlide><img src={tercera} alt="primera" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
