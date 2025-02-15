import Aboutpage from "../pages/about/aboutpage";
import Homepage from "../pages/home/Homepage";

export const userspaths = [
    {
        name:"Home",
        path:"/",
        element:<Homepage/>

    },
    {
        name:"All Products",
        path:"allproduct",
        element:<Aboutpage/>
    },
    {
        name:"About",
        path:"about",
        element:<Aboutpage/>
    }
]