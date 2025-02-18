import ProductSectionSkeleton from "../../AllSkeleton/ProductSectionSkeleton";
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCard from "../../share/Cards/ProductCard";


const ProductSection = () => {
    const {data, isLoading}=useGetAllProductQuery(undefined)
    if(isLoading) return <ProductSectionSkeleton/>
    return (
        <div>
             <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
             {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                data?.data.map((product:any) => (
                    <ProductCard key={product._id} product={product} />
                ))
            }

          </div>
        </div>
    );
};

export default ProductSection;