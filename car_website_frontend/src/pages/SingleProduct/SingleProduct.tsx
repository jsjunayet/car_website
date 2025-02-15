import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";


const SingleProduct = () => {
    return (
        <div>
              <div className="flex flex-col items-center justify-center w-full my-10 lg:flex-row lg:items-start md:gap-20">
        <div className="w-full lg:w-[50%] overflow-hidden">
          <ProductSlider />
        </div>
        <div className="w-full  lg:w-[50%]">
          <ProductDetails/>
        </div>
      </div>
        </div>
    );
};

export default SingleProduct;