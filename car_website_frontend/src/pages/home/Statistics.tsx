import { Award, CheckCircle, Globe, Users } from "lucide-react";
import { useGetAllRevinewQuery } from "../../redux/features/product/ProductApi";
const Statistics = () => {
  const { data } = useGetAllRevinewQuery();
  console.log(data);
  return (
    <div>
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto  relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Trusted by Thousands</h2>
            <p className="text-xl opacity-90">
              Our numbers speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                number: data?.data?.userCount
                  ? `${data.data.userCount}+`
                  : "Load...",
                label: "Happy Customers",
                icon: Users,
              },
              {
                number: data?.data?.carCount
                  ? `${data.data.carCount}+`
                  : "Load...",
                label: "Cars Sold",
                icon: CheckCircle,
              },
              { number: "15+", label: "Years Experience", icon: Award },
              {
                number: data?.data?.orderCount
                  ? `${data.data.orderCount}+`
                  : "Load...",
                label: "Order",
                icon: Globe,
              },
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
    </div>
  );
};

export default Statistics;
