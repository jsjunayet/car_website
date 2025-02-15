import ProductCard from "../../share/Cards/ProductCard";
import SingleProduct from "../SingleProduct/SingleProduct";
import BannerLayout from "./Bannar/BannerLayout";


const Homepage = () => {
    return (
        <div className=" max-w-7xl mx-auto space-y-8 my-8">
           <BannerLayout/>
          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
          <SingleProduct/>
        </div>
    );
};

export default Homepage;