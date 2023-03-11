import { createSlice } from "@reduxjs/toolkit";

import mockData from "./../constants/mockData.json";

const catalogueSlice = createSlice({
    name: "products",
    initialState: mockData.catalogue,
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
