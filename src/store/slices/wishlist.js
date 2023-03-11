import { createSlice } from "@reduxjs/toolkit";

import mockData from "./../constants/mockData.json";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: mockData.wishlist,
    reducers: {
        addToWishlist(state, action) {},
        removeFromWishlist(state, action) {},
    },
});

export default wishlistSlice;

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
