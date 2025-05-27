import { Star } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    role: "Business Owner",
    rating: 5,
    comment:
      "Exceptional service and quality. Found my dream car at an amazing price. The team was professional and helpful throughout the entire process.",
    avatar: "JS",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    rating: 5,
    comment:
      "Amazing experience! The financing options made it easy to get my luxury car. Highly recommend CarBazaar to everyone looking for quality vehicles.",
    avatar: "SJ",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Michael Davis",
    role: "Software Engineer",
    rating: 5,
    comment:
      "Top-notch customer service and transparent pricing. The delivery was prompt and the car was exactly as described. Outstanding experience!",
    avatar: "MD",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Doctor",
    rating: 5,
    comment:
      "Professional team with extensive knowledge. They helped me find the perfect car within my budget. The whole process was seamless and stress-free.",
    avatar: "EC",
    color: "bg-pink-500",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Entrepreneur",
    rating: 5,
    comment:
      "Incredible selection of premium vehicles. The staff went above and beyond to ensure I was completely satisfied with my purchase.",
    avatar: "DW",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Designer",
    rating: 5,
    comment:
      "Best car buying experience I've ever had. Transparent pricing, excellent service, and a beautiful showroom. Will definitely return for my next car.",
    avatar: "LA",
    color: "bg-indigo-500",
  },
];
const ReviewSection = () => {
  return (
    <div>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>
        <div className="max-w-7xl mx-auto  relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-600 text-sm font-medium mb-4">
              Customer Reviews
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from satisfied customers who found their perfect
              vehicle with us
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-8 leading-relaxed italic">
                        "{review.comment}"
                      </blockquote>
                      <div className="flex items-center">
                        <div
                          className={`w-14 h-14 ${review.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                        >
                          <span className="font-bold text-white text-lg">
                            {review.avatar}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {review.name}
                          </div>
                          <div className="text-gray-600">{review.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white shadow-lg hover:bg-gray-50 border-0 -left-12" />
            <CarouselNext className="bg-white shadow-lg hover:bg-gray-50 border-0 -right-12" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
