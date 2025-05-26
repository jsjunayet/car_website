import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { addToCart } from "../../redux/features/product/productSlice";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(addToCart(productDetails));
    navigate("/checkout");
  };

  return (
    <div className="">
      {/* product name */}
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

      <div className="mt-5">
        <Button
          onClick={handleBuyNow}
          type="submit"
          name="action"
          value="buyNow"
          className="flex justify-center cursor-pointer bg-blue-600 w-full items-center hover:text-white gap-2 px-[40px] py-3 text-sm"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
