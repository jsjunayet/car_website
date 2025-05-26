import { CreditCard, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/app";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full lg:w-[390px] bg-white border border-slate-200 rounded-lg shadow-sm h-fit ">
      <div className="px-6 py-6 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Order Summary</h2>

        <div className="space-y-2">
          <div className="flex justify-between text-slate-600">
            <span>Selected Items:</span>
            <span>{selectedItems}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="h-px bg-slate-200 my-3"></div>

          <div className="flex justify-between text-slate-800 text-lg font-semibold">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 space-y-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-md w-full text-sm font-medium flex justify-between items-center hover:bg-slate-50 transition-colors"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={16} height={16} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="px-4 py-2.5 bg-primary text-white rounded-md w-full text-sm font-medium flex justify-between items-center hover:bg-emerald-700 transition-colors"
        >
          <span>Proceed to Checkout</span>
          <CreditCard className="inline" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
