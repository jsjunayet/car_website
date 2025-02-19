import React from "react";

const Aboutpage: React.FC = () => {
  return (
    <div className="min-h-screen  py-12 px-6 md:px-16">
      <div className="max-w-7xl border mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          About Our Car Shop
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">Elite Auto Hub</span>, your one-stop destination for buying and selling cars effortlessly. Our platform ensures a smooth and transparent experience for both buyers and sellers, offering a wide range of vehicles from trusted brands.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>Verified Sellers & Authentic Listings</li>
              <li>Secure Transactions with SurjoPay</li>
              <li>User-Friendly Dashboard & Order Tracking</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mt-4">
              At Elite Auto Hub, we aim to simplify car buying and selling by integrating the latest technology and a customer-centric approach. Whether you’re looking for a brand-new ride or a budget-friendly used car, we’ve got you covered!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
