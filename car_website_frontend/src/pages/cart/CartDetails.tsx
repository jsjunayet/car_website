/* eslint-disable @typescript-eslint/no-explicit-any */
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks/app";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart({ _id }));
  };

  return (
    <div className="flex items-center justify-between gap-4 border border-slate-200 rounded-lg p-4 bg-white shadow-sm transition-transform hover:shadow-md w-full">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-md"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-semibold text-slate-800 truncate mb-1">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-slate-700">${product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantity("decrement", product._id)}
          className="bg-slate-100 text-slate-800 p-2 rounded-full hover:bg-emerald-100 transition-colors"
          disabled={product.quantity === 1}
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="text-lg font-semibold text-slate-800 w-6 text-center">
          {product.quantity}
        </span>
        <button
          onClick={() => handleQuantity("increment", product._id)}
          className="bg-slate-100 text-slate-800 p-2 rounded-full hover:bg-emerald-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      <button
        onClick={() => handleRemove(product._id)}
        className="bg-white text-slate-600 border border-slate-200 p-2 rounded-full hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default CartDetails;
