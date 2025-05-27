import { CreditCard, Shield, Truck, Users } from "lucide-react";

const WhyChoose = () => {
  return (
    <div>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Why Choose CarBazaar
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
    </div>
  );
};

export default WhyChoose;
