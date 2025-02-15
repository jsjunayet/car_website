import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import { routerGenerator } from "../lib/routerGenerator";
import { userspaths } from "./user.route";



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
])
export default router