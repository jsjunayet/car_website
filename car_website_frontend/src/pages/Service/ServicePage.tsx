import {
  Award,
  Car,
  CreditCard,
  DollarSign,
  RefreshCw,
  Shield,
  Users,
  Wrench,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Sales",
      description:
        "Browse our extensive inventory of new and pre-owned vehicles from top brands.",
      features: [
        "New & Used Cars",
        "Certified Pre-Owned",
        "Luxury Collection",
        "Economy Options",
      ],
    },
    {
      icon: DollarSign,
      title: "Financing",
      description:
        "Flexible financing options to help you drive away in your dream car today.",
      features: [
        "Competitive Rates",
        "Quick Approval",
        "Bad Credit OK",
        "Lease Options",
      ],
    },
    {
      icon: RefreshCw,
      title: "Trade-In",
      description:
        "Get the best value for your current vehicle with our trade-in program.",
      features: [
        "Free Appraisal",
        "Instant Quotes",
        "Fair Market Value",
        "Easy Process",
      ],
    },
    {
      icon: Wrench,
      title: "Service & Maintenance",
      description:
        "Professional automotive service from certified technicians.",
      features: [
        "Oil Changes",
        "Brake Service",
        "Engine Repair",
        "Scheduled Maintenance",
      ],
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description:
        "Protect your investment with comprehensive warranty coverage.",
      features: [
        "Powertrain Coverage",
        "Bumper-to-Bumper",
        "Roadside Assistance",
        "Nationwide Coverage",
      ],
    },
    {
      icon: CreditCard,
      title: "Insurance",
      description: "Complete insurance solutions for your new vehicle.",
      features: [
        "Auto Insurance",
        "Gap Coverage",
        "Comprehensive Plans",
        "Competitive Rates",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our knowledgeable staff has years of experience in the automotive industry.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized for excellence in customer service and satisfaction.",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description:
        "Thousands of satisfied customers trust us with their automotive needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive automotive solutions designed to meet all your vehicle
            needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sales to service, we provide everything you need for your
              automotive journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CarBazaar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service that goes above
              and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our services and how we can
            help you
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Browse Inventory
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
