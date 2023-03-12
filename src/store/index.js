import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart";
import catalogue from "./slices/catalogue";
import wishlist from "./slices/wishlist";

const store = configureStore({
    reducer: {
        cart: cart.reducer,
        catalogue: catalogue.reducer,
        wishlist: wishlist.reducer,
    },
});

export default store;
