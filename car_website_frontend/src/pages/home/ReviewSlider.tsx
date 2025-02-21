import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../src/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { Star } from "lucide-react";

import img1 from "../../assets/review/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import img2 from "../../assets/review/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray.jpg";
import img3 from "../../assets/review/closeup-young-female-professional-making-eye-contact-against-colored-background.jpg";
import img4 from "../../assets/review/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses.jpg";
import img5 from "../../assets/review/portrait-expressive-young-woman.jpg";

const reviews = [
    {
        name: "John Doe",
        avatar: img1,
        rating: 5,
        review: "Amazing product! The quality exceeded my expectations.",
    },
    {
        name: "Sarah Smith",
        avatar: img2,
        rating: 4,
        review: "Great value for money. Would definitely recommend!",
    },
    {
        name: "Michael Lee",
        avatar: img3,
        rating: 5,
        review: "Excellent customer service and fast delivery!",
    },
    {
        name: "Emily Johnson",
        avatar: img4,
        rating: 4.5,
        review: "Very satisfied with my purchase. Will buy again.",
    },
    {
        name: "David Brown",
        avatar: img5,
        rating: 4,
        review: "Good quality, but shipping took longer than expected.",
    },
];
export function ReviewSlider() {
    return (
   <div className="px-2 md:px-0">
         <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[emblaCarouselAutoplay({ delay: 4000 })]}
            className="w-full mx-auto my-6"
        >
            <CarouselContent>
                {reviews.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-full sm:basis-1/1 md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                    >
                        <div className=" cursor-pointer">
                            <Card className=" shadow-md hover:shadow-xl transition-shadow rounded-2xl ">
                                <CardContent className="flex flex-col items-center text-center p-6">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                                    />
                                    <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
                                    <div className="flex mt-2">
                                        {[...Array(Math.floor(item.rating))].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                                        ))}
                                        {item.rating % 1 !== 0 && (
                                            <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                                        )}
                                    </div>
                                    <p className="mt-2 text-gray-600 text-sm">{item.review}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        <CarouselPrevious className={cn("absolute md:-top-8 md:right-10 md:left-auto xl:left-auto left-0")} />
            <CarouselNext className={cn( 'absolute md:-top-8 md:left-auto right-0')}/>
        </Carousel>
   </div>
    );
}
