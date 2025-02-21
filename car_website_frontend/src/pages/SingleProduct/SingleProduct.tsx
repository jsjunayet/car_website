import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
import { useGetSingleProductQuery } from "../../redux/features/product/ProductApi";
import ProductDetailsSkeleton from "../../AllSkeleton/ProductDetailsSkeleton";


const SingleProduct = () => {
  const { id } = useParams();
  const {data, isLoading}=useGetSingleProductQuery(id) 
  console.log(data);
  if(isLoading) return <ProductDetailsSkeleton/>

    return (
        <div className=" max-w-7xl mx-auto px-2 md:px-0">
              <div className="flex flex-col items-center justify-center w-full my-10 lg:flex-row lg:items-start md:gap-20">
        <div className="w-full lg:w-[50%] overflow-hidden">
          <ProductSlider images={data?.data?.images} />
        </div>
        <div className="w-full  lg:w-[50%]">
          <ProductDetails productDetails={data?.data}/>
        </div>
      </div>
        </div>
    );
};

export default SingleProduct;