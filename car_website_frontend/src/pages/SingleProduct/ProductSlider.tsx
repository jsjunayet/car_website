"use client";
import  { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper class


import "swiper/swiper-bundle.css";


import { Thumbs, Navigation } from "swiper/modules";
const ProductSlider = () => {
  const  Images =[
{imageUrl:'../../../src/assets/3d-car-with-vibrant-colors.jpg'},
{imageUrl:'../../../src/assets/3d-car-with-vibrant-colors.jpg'},
{imageUrl:'../../../src/assets/3d-car-with-vibrant-colors.jpg'},
{imageUrl:'../../../src/assets/3d-car-with-vibrant-colors.jpg'},

    ]
	
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
	
	return (
		<div>
			<div className="block">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[Thumbs]}
					className="mySwiper2 sm:h-[480px] h-[350px] max-w-[610px] sm:max-w-[580px] rounded-lg overflow-hidden object-cover">
					{Images.length > 0 ? (
						Images.map((imageUrl, idx) => (
							<SwiperSlide key={idx}>
								<div className="relative w-full h-full overflow-hidden transition-transform duration-1000 ease-in-out rounded-lg group hover:scale-105">
                                <img src={imageUrl.imageUrl} className="absolute object-cover object-center w-full h-full -z-10" alt={`Product Image ${idx + 1}`} />
								</div>
							</SwiperSlide>
						))
					) : (
						<p>No images available.</p>
					)}
				</Swiper>
				<Swiper
					spaceBetween={0}
					slidesPerView={4}
					onSwiper={setThumbsSwiper}
					watchSlidesProgress
					modules={[Navigation, Thumbs]}
					className="mySwiper max-w-[610px] rounded-lg">
					{Images.length > 0 ? (
						Images.map((imageUrl, idx) => (
							<SwiperSlide className='px-1 py-5' key={idx}>
								<div className="rounded-lg overflow-hidden max-w-[120px] mx-auto h-[80px] border flex items-center justify-center">
									<img src={imageUrl.imageUrl} className="object-cover object-center" alt={`Product Thumbnail ${idx + 1}`} />
								</div>
							</SwiperSlide>
						))
					) : (
						<p>No thumbnails available.</p>
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductSlider;