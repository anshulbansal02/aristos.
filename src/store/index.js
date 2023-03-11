import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart";
import catalogue from "./slices/catalogue";

const store = configureStore({
    reducer: {
        cart: cart.reducer,
        catalogue: catalogue.reducer,
    },
});

export default store;
