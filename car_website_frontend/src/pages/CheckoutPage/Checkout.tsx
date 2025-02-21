import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppSelector } from "../../redux/hooks/app";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { useOrderCreateMutation } from "../../redux/features/Order/OrderApi";
import { toast } from "sonner";

// **Yup Validation Schema**
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  townOrCity: yup.string().required("Town/City is required"),
  shippingAddress: yup.string().required("Shipping Address is required"),
});

const Checkout = () => {
  const [OrderCreate, { isLoading, isSuccess, data, isError, error }]=useOrderCreateMutation()
  const cart = useAppSelector((state) => state.Product.items);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  // **React Hook Form**
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // **Order Submission**
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async(data:any) => {
    if (cart.length === 0) {
      alert("No items in cart!");
      return;
    }

    const order = cart.map((product) => ({
      email: data.email,
      name: data.name,
      phone: data.phone,
      townOrCity: data.townOrCity,
      shippingAddress: data.shippingAddress,
      car: product._id,
      quantity: quantities[product.id],
      totalPrice: product.price * quantities[product.id],
    }));
 await OrderCreate(order[0]); 

  };
  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }
    if (isError) {
      let errorMessage = "An unexpected error occurred";
    
      if ("data" in error && error.data && typeof error.data === "object") {
        const errorData = error.data as { message?: string }; 
        errorMessage = errorData.message || "Unknown error";
      }
    
      toast.error(errorMessage, { id: toastId });
    }
  },
 [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <div className="md:mx-0 mx-2">
    <div className="max-w-7xl my-10 mx-auto p-5 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="md:flex gap-10">
        <div className="md:w-1/2 w-full">
          <form className="space-y-5">
            <div className="grid gap-2 relative pt-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")}
              placeholder="Enter your Name"
               className="bg-gray-100 relative" />
              <p className=" text-red-600 absolute -bottom-5">{errors.name?.message}</p>
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} 
                  placeholder="Enter your email"
              className="bg-gray-100 relative" />
              <p className=" text-red-600 absolute -bottom-5">{errors.email?.message}</p>
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel"
               placeholder="Enter your Phone Number"
               {...register("phone")} className="bg-gray-100 relative" />
              <p className=" text-red-600 absolute -bottom-5">{errors.phone?.message}</p>
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="townOrCity">Town/City</Label>
              <Input id="townOrCity"  placeholder="Enter your Town/City"
             {...register("townOrCity")} className="bg-gray-100 relative" />
              <p className="text-red-600 absolute -bottom-5">{errors.townOrCity?.message}</p>
            </div>

            <div className="grid gap-2 relative">
              <Label htmlFor="shippingAddress">Shipping Address</Label>
              <Textarea
                id="shippingAddress"
                {...register("shippingAddress")}
                className="min-h-[100px] bg-gray-100 relative"
                placeholder="Enter your shipping address"
              />
              <p className="text-red-600 absolute -bottom-5">{errors.shippingAddress?.message}</p>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 w-full">
          {cart.length > 0 ? (
            <>
              {cart.map((product) => (
                <div key={product.id} className="border p-3 rounded-lg mt-3">
                  <h2 className="text-lg font-semibold">
                    {product.brand}, {product.model}
                  </h2>
                  <p>Price: <span className=" text-blue-600">৳{product.price}</span></p>
                  {product.inStock ? (
                    <p className="text-green-700">Available: {product.quantity}</p>
                  ) : (
                    <p className="text-red-800">Not Available: {product.quantity}</p>
                  )}

                  {/* Quantity Section */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      type="button"
                      className="px-3 py-2 border rounded-md cursor-pointer text-xl font-bold"
                      onClick={() => setQuantities((prev) => ({ ...prev, [product.id]: Math.max(prev[product.id] - 1, 1) }))}
                      disabled={quantities[product.id] <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{quantities[product.id]}</span>
                    <button
                      type="button"
                      className="px-3 py-2 border rounded-md cursor-pointer text-xl font-bold"
                      onClick={() => setQuantities((prev) => ({ ...prev, [product.id]: Math.min(prev[product.id] + 1, product.quantity) }))}
                      disabled={quantities[product.id] >= product.quantity}
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price */}
                  <p className="text-lg font-semibold mt-2">
                    Total: <span className=" text-blue-600">৳{product.price * quantities[product.id]}</span>
                  </p>
                </div>
              ))}

              {/* Confirm Order Button (Inside Cart Section) */}
              <button
                type="button"
                className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-md w-full mt-4"
                onClick={handleSubmit(onSubmit)}
              >
                {isLoading?"Confirm Ordering...":"Confirm Order"}
              </button>
            </>
          ) : (
            <p>No items in cart.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
