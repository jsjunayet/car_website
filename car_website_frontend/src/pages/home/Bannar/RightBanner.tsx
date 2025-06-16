import { ArrowRight, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

export default function RightBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      badge: "Limited Offer",
      title: "Weekend Special",
      description: "Up to 30% off on premium rentals",
      details: "Valid until Sunday",
      icon: Clock,
      color: "bg-red-500",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      badge: "New Location",
      title: "Now Open",
      description: "Visit our downtown branch",
      details: "Grand opening discounts",
      icon: MapPin,
      color: "bg-green-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {promotionData.map((promo, index) => {
        const IconComponent = promo.icon;
        return (
          <div
            key={promo.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-y-0"
                : index < currentSlide
                ? "opacity-0 -translate-y-full"
                : "opacity-0 translate-y-full"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="space-y-3">
                  <Badge className={`${promo.color} text-white border-0 w-fit`}>
                    <IconComponent className="w-3 h-3 mr-1" />
                    {promo.badge}
                  </Badge>

                  <h3 className="text-2xl font-bold text-white">
                    {promo.title}
                  </h3>

                  <p className="text-gray-200 text-sm leading-relaxed">
                    {promo.description}
                  </p>

                  <p className="text-gray-300 text-xs">{promo.details}</p>

                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100 transition-all duration-300 w-fit group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div className="absolute top-4 right-4 flex space-x-2">
        {promotionData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
