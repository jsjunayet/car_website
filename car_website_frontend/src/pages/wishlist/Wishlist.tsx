import { Heart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useAppSelector } from "../../redux/hooks/app";
import ProductCard from "../../share/Cards/ProductCard";

const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);
  if (wishlistItems?.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your Wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Save items you love for later!</p>
          <Button onClick={() => navigate("/allproduct")}>
            Browse Products
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className=" max-w-7xl mx-auto pt-44 min-h-[70vh]">
      <div className=" grid md:grid-cols-4 grid-cols-1 gap-2">
        {wishlistItems.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
