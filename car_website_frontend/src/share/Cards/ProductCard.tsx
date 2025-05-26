import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleWishlistItem } from "../../redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/app";
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
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);

  const isInWishlist = wishlistItems?.some((item) => item._id === product._id);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = async (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added Cart Product");
  };
  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
    toast.success(isInWishlist ? "Removed from Wishlist" : "Added to Wishlist");
  };
  return (
    <div className="relative w-full xsm:h-min h-min transition-all duration-500 sm:p-3 p-2 mx-auto hover:border-primary shadow-lg  rounded-lg bg-white border-2 border-transparent">
      {/* Discount Badge */}
      <div className="absolute px-2 py-1 text-xs text-green-800 bg-green-200 rounded-full top-5 left-5">
        {product.category}
      </div>
      <div className="absolute top-5 right-5 flex items-center gap-2 bg-primary/60 shadow-sm rounded-full px-2 py-0.5 border border-gray-200">
        <button onClick={handleToggleWishlist} aria-label="Toggle Wishlist">
          {isInWishlist ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              stroke="none"
              className="h-5 w-5"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <Heart className="h-5 w-5 text-white hover:text-red-500" />
          )}
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
