import { createSlice } from "@reduxjs/toolkit";

import mockData from "./../constants/mockData.json";

const cartSlice = createSlice({
    name: "cart",
    initialState: mockData.cart,
    reducers: {
        addToCart(state, action) {},
        removeFromCart(state, action) {},

        emptyCart(state) {},
    },
});

export default cartSlice;

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
