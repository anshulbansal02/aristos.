import { createBrowserRouter, Outlet, redirect } from "react-router-dom";

import AdminView from "./Admin/Admin";
import CartView from "./Cart/Cart";
import StoreView from "./Store/Store";
import { Navbar } from "../components";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/store",
                element: <StoreView />,
            },
            {
                path: "/cart",
                element: <CartView />,
            },
            {
                path: "/admin",
                element: <AdminView />,
            },
        ],
    },
]);

export default router;
