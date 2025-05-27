import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductSectionSkeleton from "../../AllSkeleton/ProductSectionSkeleton";
import { Button } from "../../components/ui/button";
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCard from "../../share/Cards/ProductCard";

const ProductSection = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) return <ProductSectionSkeleton />;
  return (
    <div className="px-2 md:px-0 max-w-7xl mx-auto py-24">
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.data?.slice(0, 8).map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
      <div className="text-center mt-16">
        <Button size="lg" asChild className="bg-primary">
          <Link to="/allproduct" className="flex items-center ">
            View All Cars <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
