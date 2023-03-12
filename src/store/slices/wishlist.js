import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {},
    reducers: {
        toggleProductInWishlist(state, action) {
            const { productId } = action.payload;
            state[productId] = !state[productId];
        },

        // addToWishlist(state, action) {
        //     state.push({ id: action.payload.productId });
        // },
        // removeFromWishlist(state, action) {},
    },
});

export default wishlistSlice;

export const { toggleProductInWishlist } = wishlistSlice.actions;
