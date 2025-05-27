import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";

import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToCartFromCheckout } from "../../redux/features/product/productSlice";
import { useAppDispatch } from "../../redux/hooks/app";
interface Product {
  id: string;
  _id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
  inStock: boolean;
  description: string;
  image: string[];
}

interface ProductDetailsProps {
  productDetails: Product; // Use the Product type here
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productDetails }) => {
  // const { data } = useGetAllProductQuery(undefined);
  // console.log(data);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBuyNow = () => {
    dispatch(addToCartFromCheckout(productDetails));
    navigate("/checkout", {
      state: { from: "productDetials" },
    });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = async (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added Cart Product");
  };

  return (
    <div className="">
      {/* product name */}
      <div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase text-primary">
            {productDetails?.category}
          </p>
          <h1 className="text-2xl font-bold">
            {productDetails.brand}, {productDetails.model}
          </h1>
        </div>

        {/* price, and rating */}
        <div className="space-y-2">
          <div className="flex items-center justify-start gap-3">
            <p className=" text-xs text-primary border-primary">
              {productDetails.inStock
                ? `In Stock(${productDetails.quantity})`
                : "Out Stock"}
            </p>
          </div>
          <div className="flex items-end gap-1">
            <h1 className="text-xl font-bold text-blue-600">
              ৳ {productDetails.price}
            </h1>
          </div>
          <div className="text-sm ">
            <h3 className="text-sm text-gray-500 font-medium max-w-[400px]">
              {productDetails.description}
            </h3>
          </div>
        </div>

        <div className="mt-5 md:flex gap-2">
          <Button
            onClick={handleBuyNow}
            type="submit"
            name="action"
            value="buyNow"
            className="flex justify-center mb-2 cursor-pointer bg-blue-600 w-full items-center hover:text-white gap-2 px-[40px] py-3 text-sm"
          >
            Buy Now
          </Button>
          <Button
            onClick={() => handleAddToCart(productDetails)}
            type="submit"
            name="action"
            value="buyNow"
            className="flex justify-center cursor-pointer bg-blue-600 w-full items-center hover:text-white gap-2 px-[40px] py-3 text-sm"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
