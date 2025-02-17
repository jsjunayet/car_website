import { useState } from "react";
import { Button } from "../../components/ui/button";
import { useAppSelector } from "../../redux/hooks/app";



const Checkout = () => {
  const cart = useAppSelector((state) => state.Product.items);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const handleIncrease = (id: string, availableQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.min(prev[id] + 1, availableQuantity),
    }));
  };
  const handleDecrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

   const handleSubmit = () => {
    if (cart.length === 0) {
      alert("No items in cart!");
      return;
    }

    const userEmail = "customer@example.com";
    console.log(cart);

    const order = cart.map((product) => ({
      email: userEmail,
      car: product._id,
      quantity: quantities[product.id],
      totalPrice: product.price * quantities[product.id],
    }));

    console.log("Order Config:", order[0]);
    alert("Order placed successfully! Check console for order details.");
  };

  return (
    <div className="max-w-7xl my-10 mx-auto p-5 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="flex gap-10">
      <div className="w-1/2">
  </div>
       <div className="w-1/2">
       {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <div key={product.id} className="border p-3 rounded-lg mt-3">
                <h2 className="text-lg font-semibold">
                  {product.brand}, {product.model}
                </h2>
                <p>Price: ${product.price}</p>
                {
                  product.inStock?<p className=" text-green-700">Available: {product.quantity}</p>:<p className=" text-red-800">Not Available: {product.quantity}</p>


                }  
                {/* Quantity Buttons */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="button"
                    className="px-3 py-2 border rounded-md"
                    onClick={() => handleDecrease(product.id)}
                    disabled={quantities[product.id] <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{quantities[product.id]}</span>
                  <button
                    type="button"
                    className="px-3 py-2 border rounded-md"
                    onClick={() => handleIncrease(product.id, product.quantity)}
                    disabled={quantities[product.id] >= product.quantity}
                  >
                    +
                  </button>
                </div>
  
                {/* Total Price */}
                <p className="text-lg font-semibold mt-2">
                  Total: ${product.price * quantities[product.id]}
                </p>
              
              </div>
            ))}
  
            {/* Submit Button */}
            <Button onClick={handleSubmit} className="w-full mt-4">
              Confirm Order
            </Button>
          </>
        ) : (
          <p>No items in cart.</p>
        )}
       </div>
      </div>
    </div>
  );
};

export default Checkout;
