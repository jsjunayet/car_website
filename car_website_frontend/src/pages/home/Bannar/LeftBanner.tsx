
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function LeftBanner() {
    const data =[{bannerImage:"../../../../src/assets/toyota-my-gallery-exterior-s-d-01-v2.jpg"},
        {bannerImage:"../../../../src/assets/images (7).jpeg"},
        {bannerImage:"../../../../src/assets/3d-car-with-vibrant-colors.jpg"}
    ]

  return (
    <div className="relative group h-full">
      {/* Swiper Slider */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enables Swiper's navigation functionality
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className={`mySwiper w-full h-full`}
      >
        {data?.map((image, index) => (
          <SwiperSlide key={index}>
            <img
             src={image?.bannerImage}
             alt={`Banner Image ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
  className="absolute top-1/2 left-0 z-10 text-white py-2 sm:rounded-l-lg rounded-none transform -translate-y-1/2 hover:bg-primary transition opacity-100 h-full"
  onClick={() => {
    const prevButton = document.querySelector('.mySwiper .swiper-button-prev') as HTMLElement;
    prevButton?.click();
  }}
>
  <FaCaretLeft className="text-2xl" />
</button>

<button
  className="absolute top-1/2 right-0 z-10 text-white py-2 sm:rounded-r-lg rounded-none transform -translate-y-1/2 hover:bg-primary transition opacity-100 h-full"
  onClick={() => {
    const nextButton = document.querySelector('.mySwiper .swiper-button-next') as HTMLElement;
    nextButton?.click();
  }}
>
  <FaCaretRight className="text-2xl" />
</button>

    </div>
  );
}