import Aboutpage from "../pages/about/aboutpage";
import AllProduct from "../pages/AllProducts/AllProduct";
import Checkout from "../pages/CheckoutPage/Checkout";
import Homepage from "../pages/home/Homepage";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const userspaths = [
    {
        name:"Home",
        path:"/",
        element:<Homepage/>

    },
    {
        name:"All Products",
        path:"allproduct",
        element:<AllProduct/>
    },
    {
        name: "Single Product",  
        path: "allproduct/:id",  
        element: <SingleProduct />
    },
    {
        name:"Checkout",
        path:"checkout",
        element:<Checkout/>
    },
    {
        name:"About",
        path:"about",
        element:<Aboutpage/>
    }
]