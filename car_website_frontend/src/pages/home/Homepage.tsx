import ProductCard from "../../share/Cards/ProductCard";
import SingleProduct from "../SingleProduct/SingleProduct";
import BannerLayout from "./Bannar/BannerLayout";
import ProductSection from "./ProductSection";


const Homepage = () => {
    return (
        <div className=" max-w-7xl mx-auto space-y-8 my-8">
           <BannerLayout/>
         <ProductSection/>
        </div>
    );
};

export default Homepage;