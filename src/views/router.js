import { createBrowserRouter, Outlet } from "react-router-dom";

import AdminView from "./AdminView/AdminView";
import CartView from "./CartView/CartView";
import StoreView from "./StoreView/StoreView";
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
