import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addToCart(state, action) {},
        removeFromCart(state, action) {},

        emptyCart(state) {},
    },
});

export default cartSlice;

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
