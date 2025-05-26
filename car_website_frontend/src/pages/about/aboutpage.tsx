import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";
import React from "react";

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced team has been serving customers for over 20 years",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every vehicle undergoes rigorous inspection before delivery",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description:
        "We provide comprehensive warranties and after-sales support",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About CarBazaar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your premier destination for luxury and affordable automobiles.
            We've been connecting people with their dream cars for over two
            decades.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2004, CarBazaar began as a small family business with
                a simple mission: to help people find the perfect vehicle that
                matches their lifestyle and budget.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown into one of the most trusted car
                dealerships in the region, serving thousands of satisfied
                customers and building lasting relationships based on trust,
                quality, and exceptional service.
              </p>
              <p className="text-gray-600">
                Today, we offer an extensive selection of vehicles from economy
                cars to luxury automobiles, ensuring that every customer finds
                exactly what they're looking for.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="CarBazaar dealership"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CarBazaar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and building
              long-term relationships with our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To provide exceptional automotive solutions that exceed customer
            expectations, while maintaining the highest standards of integrity,
            quality, and service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Vehicles in Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
