import { createSlice } from "@reduxjs/toolkit";

import productsMockData from "./../constants/mock/products.json";

const catalogueSlice = createSlice({
    name: "catalogue",
    initialState: { products: productsMockData },
    reducers: {
        addProduct(state, action) {},

        updateProduct(state, action) {},

        listProduct(state, action) {
            const { productId } = action.payload;
            state.products[productId].listed = true;
        },

        delistProduct(state, action) {
            const { productId } = action.payload;
            state.products[productId].listed = false;
        },
    },
});

export default catalogueSlice;
