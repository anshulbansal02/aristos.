import { createSlice } from "@reduxjs/toolkit";

function getCartItemKey(pid, size) {
    return `${pid}#${size}`;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {},
        itemsCount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const { productId, quantity, size } = action.payload;
            const key = getCartItemKey(productId, size);

            if (!state.items[key])
                state.items[key] = { size, productId, quantity: 0 };

            state.items[key].quantity += quantity;
            state.itemsCount += quantity;
        },

        removeFromCart(state, action) {
            const { productId, quantity, size } = action.payload;

            const key = getCartItemKey(productId, size);

            if (state.items[key]) {
                if (!quantity) {
                    state.itemsCount -= state.items[key].quantity;
                    delete state.items[key];
                } else {
                    state.items[key].quantity -= quantity;
                    state.itemsCount -= quantity;
                    if (state.items[key].quantity <= 0) {
                        delete state.items[key];
                        state.itemsCount = 0;
                    }
                }
            }
        },

        emptyCart(state) {
            state.items = {};
            state.itemsCount = 0;
        },
    },
});

export default cartSlice;

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
