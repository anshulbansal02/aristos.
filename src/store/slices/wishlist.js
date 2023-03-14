import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {},
    reducers: {
        toggleProductInWishlist(wishlist, action) {
            const { productId } = action.payload;
            wishlist[productId] = !wishlist[productId];
        },
    },
});

export default wishlistSlice;

export const { toggleProductInWishlist } = wishlistSlice.actions;
