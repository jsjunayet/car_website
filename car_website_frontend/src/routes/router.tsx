import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import { routerGenerator } from "../lib/routerGenerator";
import { Adminpaths, userpaths, userspaths } from "./user.route";
import Register from "../pages/register/Register";
import MainDashbaord from "../pages/Dashboard/MainDashbaord";



const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: routerGenerator(userspaths)
    },
    {
        path:"/login",
        element: <Login/>,
    },
    {
        path:"/register",
        element: <Register/>,
    },
    {
        path:"/dashboard",
        element: <MainDashbaord/>,
        children: routerGenerator(Adminpaths)
    },
    {
        path:"/profile",
        element: <MainDashbaord/>,
        children: routerGenerator(userpaths)
    },
])
export default router