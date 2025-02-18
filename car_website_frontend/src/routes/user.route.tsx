import Aboutpage from "../pages/about/aboutpage";
import AllProduct from "../pages/AllProducts/AllProduct";
import Checkout from "../pages/CheckoutPage/Checkout";
import DashboardHome from "../pages/Dashboard/DashbordHome/DashboardHome";
import ManageOrder from "../pages/Dashboard/ManageOrder/ManageOrder";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import CreateProduct from "../pages/Dashboard/MangeProduct/CreateProduct";
import ManageProduct from "../pages/Dashboard/MangeProduct/ManageProduct";
import UpateProduct from "../pages/Dashboard/MangeProduct/UpateProduct";
import Homepage from "../pages/home/Homepage";
import OrderVerify from "../pages/OrderVerify/OrderVerify";
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
    },
    {
        name:"OrderVerify",
        path:"order/verify",
        element:<OrderVerify/>
    }
]
export const Adminpaths = [
    {
        name:"Dashborad",
        path:"/dashboard",
        element:<DashboardHome/>

    },
    {
        name:"Create Product",
        path:"/dashboard/createProduct",
        element:<CreateProduct/>
    },
    {
        name: "update Product",  
        path: "/dashboard/updateProduct/:id",  
        element: <UpateProduct />
    },
    {
        name: "Manage Products",  
        path: "/dashboard/manageProduct",  
        element: <ManageProduct />
    },
    {
        name:"Manage User",
        path:"/dashboard/user",
        element:<ManageUser/>
    },
    {
        name:"Manage Orders",
        path:"/dashboard/all-orders",
        element:<ManageOrder/>
    },
]