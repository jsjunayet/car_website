
import { Swiper, SwiperSlide } from "swiper/react";
import './BannerSlide.css';

import "swiper/swiper-bundle.css";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function RightBanner() {
    const data =[{bannerImage:"../../../../src/assets/3d-car-with-vibrant-colors.jpg"},
        {bannerImage:"../../../../src/assets/3d-car-with-vibrant-colors.jpg"},
        {bannerImage:"../../../../src/assets/3d-car-with-vibrant-colors.jpg"}
    ]
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full mySwiper"
        // style={{ position: 'relative' }} // Lower z-index than the navigation
      >
        {data?.map((image, index) => (
          <SwiperSlide key={index}>
            <img  src={image?.bannerImage}  alt={`Promotion ${index + 1}`} className=" object-center w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}