import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  Heart,
  MapPin,
  Phone,
  Shield,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockProducts } from "../../lib/product";
import BannerLayout from "./Bannar/BannerLayout";
const Homepage = () => {
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
        "Amazing experience! The financing options made it easy to get my luxury car. Highly recommend AutoLux to everyone looking for quality vehicles.",
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
  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto space-y-8 my-8">
        <BannerLayout />
      </div>
      {/* Featured Products */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Featured Collection
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked premium cars for discerning customers who demand
              excellence in every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
                      Save $
                      {(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm bg-white/90"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-yellow-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {product.brand} • {product.year}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-green-600">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                    >
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Link to="/products" className="flex items-center">
                View All Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Why Choose AutoLux
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Experience Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart in the automotive industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Certified Quality",
                desc: "All vehicles undergo rigorous quality checks and certification",
                color: "blue",
                delay: "0ms",
              },
              {
                icon: Truck,
                title: "Free Delivery",
                desc: "Complimentary delivery to your doorstep nationwide",
                color: "green",
                delay: "100ms",
              },
              {
                icon: CreditCard,
                title: "Easy Financing",
                desc: "Flexible payment options and competitive interest rates",
                color: "purple",
                delay: "200ms",
              },
              {
                icon: Users,
                title: "Expert Support",
                desc: "Dedicated customer service and automotive experts",
                color: "orange",
                delay: "300ms",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group transform hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: item.delay }}
              >
                <div
                  className={`w-20 h-20 bg-${item.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${item.color}-200 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <item.icon className={`h-10 w-10 text-${item.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Trusted by Thousands</h2>
            <p className="text-xl opacity-90">
              Our numbers speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers", icon: Users },
              { number: "10K+", label: "Cars Sold", icon: CheckCircle },
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "100+", label: "Dealer Partners", icon: Globe },
            ].map((stat, index) => (
              <div
                key={index}
                className="group transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Slider */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

      {/* Awards & Recognition */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-600 text-sm font-medium mb-4">
              Awards & Recognition
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized by industry professionals and trusted by customers
              worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Best Dealer 2024",
                subtitle: "Auto Industry Awards",
                color: "yellow",
              },
              {
                icon: Star,
                title: "5-Star Rating",
                subtitle: "Customer Satisfaction",
                color: "blue",
              },
              {
                icon: CheckCircle,
                title: "Certified Dealer",
                subtitle: "Industry Certification",
                color: "green",
              },
              {
                icon: Users,
                title: "Trusted Partner",
                subtitle: "Premium Brands",
                color: "purple",
              },
            ].map((award, index) => (
              <div
                key={index}
                className="text-center group transform hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-20 h-20 bg-${award.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${award.color}-200 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <award.icon className={`h-10 w-10 text-${award.color}-600`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Visit Us
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Experience Our Showroom
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our state-of-the-art showroom and see our collection in
              person
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  detail: "123 Luxury Avenue, Auto City, AC 12345",
                  color: "blue",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "+1 (555) 123-4567",
                  color: "green",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  detail: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
                  color: "purple",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-${contact.color}-100 rounded-2xl flex items-center justify-center group-hover:bg-${contact.color}-200 transition-all duration-300`}
                  >
                    <contact.icon
                      className={`h-8 w-8 text-${contact.color}-600`}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{contact.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-6xl">🗺️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interactive Map
                </h3>
                <p className="text-gray-600 text-lg">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-8">
            <Zap className="h-16 w-16 mx-auto mb-6 text-blue-400" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Stay in the Fast Lane</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Get exclusive deals, new arrivals, and automotive insights delivered
            directly to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-70 mt-4">
              Join 10,000+ car enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
