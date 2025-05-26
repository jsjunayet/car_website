import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks/app";
interface Product {
  _id: string;
  category: string;
  brand: string;
  model: string;
  price: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = async (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added Cart Product");
  };
  return (
    <div className="relative w-full xsm:h-min h-min transition-all duration-500 sm:p-3 p-2 mx-auto hover:border-primary shadow-lg  rounded-lg bg-white border-2 border-transparent">
      {/* Discount Badge */}
      <div className="absolute px-2 py-1 text-xs text-green-800 bg-green-200 rounded-full top-5 left-5">
        {product.category}
      </div>
      <div className="absolute top-5 right-5 flex items-center gap-2 bg-primary/60 shadow-sm rounded-full px-2 py-0.5 border border-gray-200">
        <button
          type="button"
          className="p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="Add to Wishlist"
        >
          <Heart className="h-5 w-5 text-white hover:text-red-500" />
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          type="button"
          className="p-1 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          aria-label="Add to Cart"
        >
          <ShoppingCart className="h-5 w-5 text-white hover:text-blue-500" />
        </button>
      </div>

      <Link className="group" to={`/allproduct/${product._id}`}>
        <div>
          <img
            src={product.images[0]}
            alt={"name"}
            className="object-cover w-full rounded-md sm:h-52 h-auto"
          />
        </div>

        {/* Product Name with Slicing */}
        <h2 className="w-full mt-2 text-sm font-semibold cursor-pointer truncate transition-all duration-500 text-start group-hover:text-blue-600">
          {product.brand}, {product.model}
        </h2>
        <div className="h-[1.6px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-l from-transparent to-primary"></div>

        {/* Pricing Section */}
        <div className="flex items-center justify-between sm:mt-2 mt-1 text-sm">
          <div className="flex items-end gap-2">
            <p className="font-bold text-blue-600">৳ {product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
