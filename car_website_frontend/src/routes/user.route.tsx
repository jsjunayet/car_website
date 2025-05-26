import Aboutpage from "../pages/about/aboutpage";
import AllProduct from "../pages/AllProducts/AllProduct";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/CheckoutPage/Checkout";
import ContactUs from "../pages/contactUs/ContactUs";
import DashboardHome from "../pages/Dashboard/DashbordHome/DashboardHome";
import ManageOrder from "../pages/Dashboard/ManageOrder/ManageOrder";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import CreateProduct from "../pages/Dashboard/MangeProduct/CreateProduct";
import ManageProduct from "../pages/Dashboard/MangeProduct/ManageProduct";
import UpateProduct from "../pages/Dashboard/MangeProduct/UpateProduct";
import Homepage from "../pages/home/Homepage";
import OrderVerify from "../pages/OrderVerify/OrderVerify";
import AdminPrivateRoute from "../pages/PrivateRoute/AdminPrivateRoute";
import PrivateRoute from "../pages/PrivateRoute/UserPrivateRoute";
import ServicesPage from "../pages/Service/ServicePage";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import UserOrder from "../pages/userDashboard/Order/userOrder";
import MyProfile from "../pages/userDashboard/Profile/Profile";
import Wishlist from "../pages/wishlist/Wishlist";

export const userspaths = [
  {
    name: "Home",
    path: "/",
    element: <Homepage />,
  },
  {
    name: "All Products",
    path: "allproduct",
    element: <AllProduct />,
  },
  {
    name: "Single Product",
    path: "allproduct/:id",
    element: <SingleProduct />,
  },
  {
    name: "Checkout",
    path: "checkout",
    element: (
      <PrivateRoute>
        <Checkout />
      </PrivateRoute>
    ),
  },
  {
    name: "About",
    path: "about",
    element: <Aboutpage />,
  },
  {
    name: "Cart",
    path: "cart",
    element: <Cart />,
  },
  {
    name: "Service",
    path: "service",
    element: <ServicesPage />,
  },
  {
    name: "Wishlist",
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    name: "Contact Us",
    path: "contactus",
    element: <ContactUs />,
  },

  {
    name: "OrderVerify",
    path: "order/verify",
    element: (
      <PrivateRoute>
        <OrderVerify />
      </PrivateRoute>
    ),
  },
];
export const Adminpaths = [
  {
    name: "Dashborad",
    path: "/dashboard",
    element: (
      <AdminPrivateRoute>
        <DashboardHome />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Create Product",
    path: "/dashboard/createProduct",
    element: (
      <AdminPrivateRoute>
        <CreateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "update Product",
    path: "/dashboard/updateProduct/:id",
    element: (
      <AdminPrivateRoute>
        <UpateProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage Products",
    path: "/dashboard/manageProduct",
    element: (
      <AdminPrivateRoute>
        <ManageProduct />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage User",
    path: "/dashboard/user",
    element: (
      <AdminPrivateRoute>
        <ManageUser />
      </AdminPrivateRoute>
    ),
  },
  {
    name: "Manage Orders",
    path: "/dashboard/all-orders",
    element: (
      <AdminPrivateRoute>
        <ManageOrder />
      </AdminPrivateRoute>
    ),
  },
];
export const userpaths = [
  {
    name: "Profile",
    path: "/profile",
    element: (
      <PrivateRoute>
        <MyProfile />
      </PrivateRoute>
    ),
  },
  {
    name: "Show Order",
    path: "/profile/order",
    element: (
      <PrivateRoute>
        <UserOrder />
      </PrivateRoute>
    ),
  },
];
