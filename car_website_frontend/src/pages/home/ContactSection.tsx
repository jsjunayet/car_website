import { Clock, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto ">
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
    </div>
  );
};

export default ContactSection;
