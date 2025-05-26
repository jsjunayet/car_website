/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@reduxjs/toolkit/query";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import CartDetails from "./CartDetails";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const navigate = useNavigate();
  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Cart is empty</h2>
          <p className="text-gray-600 mb-6">Save items you love for later!</p>
          <Button onClick={() => navigate("/allproduct")}>
            Browse Products
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className=" max-w-7xl mx-auto min-h-[70vh] pt-52">
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-6">
        <div className="space-y-5 lg:mt-0 mt-5 w-full lg:w-2/3 mb-6 md:mb-0">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product._id} product={product} />
            ))
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <p className="text-2xl text-slate-600">Your cart is empty</p>
              <p className="text-slate-500 mt-2">
                Add some products to your cart to continue shopping
              </p>
            </div>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
