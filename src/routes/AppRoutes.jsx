import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "perfil",
                element: <Profile />
            },
            {
                path: "carrinho",
                element: <Cart />
            }
        ]
    }
])