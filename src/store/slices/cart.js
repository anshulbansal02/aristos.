import { createSlice } from "@reduxjs/toolkit";

function getCartItemKey(pid, size) {
    return `${pid}#${size}`;
}

function calculateCartMeta(cart) {
    let itemsCount = 0,
        subtotalAmount = 0,
        totalAmount = 0,
        shippingAmount = 120,
        discountAmount = 170;

    for (const item of Object.values(cart.items)) {
        itemsCount += item.quantity;
        subtotalAmount += item.price * item.quantity;
    }

    if (itemsCount > 0)
        totalAmount = subtotalAmount + shippingAmount - discountAmount;

    return {
        itemsCount,
        subtotalAmount,
        totalAmount,
        shippingAmount,
        discountAmount,
        items: cart.items,
    };
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        ...calculateCartMeta({ items: {} }),
    },
    reducers: {
        addToCart(cart, action) {
            const { productId, quantity, size, price } = action.payload;

            const key = getCartItemKey(productId, size);

            if (!cart.items[key])
                cart.items[key] = { size, productId, quantity: 0, price };

            cart.items[key].quantity += quantity;

            Object.assign(cart, calculateCartMeta(cart));
        },

        removeFromCart(cart, action) {
            const { productId, quantity, size } = action.payload;

            const key = getCartItemKey(productId, size);

            if (cart.items[key]) {
                if (!quantity) {
                    delete cart.items[key];
                } else {
                    cart.items[key].quantity -= quantity;
                    if (cart.items[key].quantity <= 0) {
                        delete cart.items[key];
                    }
                }
                Object.assign(cart, calculateCartMeta(cart));
            }
        },

        emptyCart(cart) {
            Object.assign(cart, calculateCartMeta({ items: {} }));
        },
    },
});

export default cartSlice;

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
