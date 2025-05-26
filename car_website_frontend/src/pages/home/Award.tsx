import { Award, CheckCircle, Star, Users } from "lucide-react";
const AwardSection = () => {
  return (
    <div>
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto ">
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
    </div>
  );
};

export default AwardSection;
