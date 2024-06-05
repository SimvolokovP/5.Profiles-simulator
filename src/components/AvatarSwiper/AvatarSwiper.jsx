import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ava1 from "../../assets/ava1.png";
import ava2 from "../../assets/ava2.png";
import ava3 from "../../assets/ava3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { avatars } from "../../data";

export default function AvatarSwiper({selectAvatar, setSelectAvatar}) {

  return (
    <Swiper
      className="avatar-swiper"
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      onSlideChange={(value) => setSelectAvatar(value.activeIndex)}
    >
        <SwiperSlide className="awatar-swiper__slide" >
          <img src={ava1} alt="avatar" />
        </SwiperSlide>
        <SwiperSlide className="awatar-swiper__slide" >
          <img src={ava2} alt="avatar" />
        </SwiperSlide>
        <SwiperSlide className="awatar-swiper__slide" >
          <img src={ava3} alt="avatar" />
        </SwiperSlide>
      {/* {avatars.map((ava, index) => (
        <SwiperSlide className="awatar-swiper__slide" key={index}>
          <img src={ava2} alt="" />
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
}
