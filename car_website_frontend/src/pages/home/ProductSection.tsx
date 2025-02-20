import { Link } from "react-router-dom";
import ProductSectionSkeleton from "../../AllSkeleton/ProductSectionSkeleton";
import { Button } from "../../components/ui/button";
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCard from "../../share/Cards/ProductCard";


const ProductSection = () => {
    const {data, isLoading}=useGetAllProductQuery({})
    if(isLoading) return <ProductSectionSkeleton/>
    return (
        <div className="px-2 md:px-0">
             <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
             {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.data?.slice(0,8).map((product:any) => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
          </div>
    <div className="text-center cursor-pointer mt-6">
    <Link to="allProduct">
  <Button className="">All Product</Button>
</Link>
    </div>


        </div>
    );
};

export default ProductSection;