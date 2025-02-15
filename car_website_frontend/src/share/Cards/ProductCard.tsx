"use client";
import { Link } from "react-router-dom";

const ProductCard = () => {
;
  
    return (
        <div className="relative w-full xsm:h-min h-min transition-all duration-500 sm:p-3 p-2 mx-auto hover:border-primary shadow-lg xl:max-w-full max-w-xs rounded-lg bg-white border-2 border-transparent">
        {/* Discount Badge */}
          <div className="absolute px-2 py-1 text-xs text-green-800 bg-green-200 rounded-full top-5 left-5">
            {'100'}
          </div>
  
  
        <Link className="group" to={`/product-details/${1}`}>
          <img
            src={"../../../src/assets/3d-car-with-vibrant-colors.jpg"}
            alt={"name"}
            className="object-cover w-full rounded-md sm:h-52 h-auto"
          />
  
          {/* Product Name with Slicing */}
          <h2 className="w-full mt-2 text-sm font-semibold cursor-pointer truncate transition-all duration-500 text-start group-hover:text-blue-600">
            {"BMW Vertion Alta"}
          </h2>
          <div className="h-[1.6px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-l from-transparent to-primary"></div>
  
          {/* Pricing Section */}
          <div className="flex items-center justify-between sm:mt-2 mt-1 text-sm">
            <div className="flex items-end gap-2">
              <p className="font-bold text-blue-600">৳ {200}</p>
              <p className="text-xs font-semibold text-red-500 line-through">
                ৳{Math.round((200))}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default ProductCard;