import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TabBar, CartItem } from "../../components";

import styles from "./cart-view.module.scss";

function EmptyBag() {
    return (
        <div className={styles.emptyBag}>
            <img src="./assets/icons/shopping-bag.png" alt="Your Empty Bag" />
            <div>
                <h2>Uh oh! Your bag is empty</h2>
                <p>Do some shopping bruh.</p>
                <Link to="/store" className="btnSolid">
                    Go To Store
                </Link>
            </div>
        </div>
    );
}

function BagView() {
    const cartData = useSelector((state) => state.cart);

    return (
        <div className="page-wrapper">
            <h2 className={styles.title}>Your Bag</h2>

            <main>
                {cartData.itemsCount ? (
                    <>
                        <ul className={styles.items}>
                            {Object.values(cartData.items).map((item) => (
                                <li key={item.productId}>
                                    <CartItem
                                        productId={item.productId}
                                        quantity={item.quantity}
                                        size={item.size}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className={styles.billing}>
                            <h3>Order Summary</h3>

                            <table>
                                <tbody>
                                    <tr>
                                        <td>Number Of Items</td>
                                        <td>{cartData.itemsCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>₹ {cartData.subtotalAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charges</td>
                                        <td>+ ₹ {cartData.shippingAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>- ₹ {cartData.discountAmount}</td>
                                    </tr>
                                    <tr>
                                        <td>Payable</td>
                                        <td>₹ {cartData.totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.payment}>
                                <h5>Pay Using</h5>
                                <ul>
                                    <li>
                                        <img
                                            src="./assets/icons/payment/apple.svg"
                                            alt="Apple Pay"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="./assets/icons/payment/mastercard.svg"
                                            alt="Mastercard"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="./assets/icons/payment/rupay.svg"
                                            alt="RuPay"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="./assets/icons/payment/upi.svg"
                                            alt="UPI"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="./assets/icons/payment/visa.svg"
                                            alt="Visa"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <button className={styles.btnSolid}>Proceed</button>
                        </div>
                    </>
                ) : (
                    <EmptyBag />
                )}
            </main>
        </div>
    );
}

function EmptyWishlist() {
    return (
        <div className={styles.emptyBag}>
            <img src="./assets/icons/wishlist.png" alt="Your Empty Wishlist" />
            <div>
                <h2>You don't love our products?</h2>
                <p>Explore some shoes bruh.</p>
                <Link to="/store" className="btnSolid">
                    Go To Store
                </Link>
            </div>
        </div>
    );
}

function WishlistView() {
    const wishlistData = useSelector((state) => state.wishlist);

    return (
        <div className="page-wrapper">
            <h2 className={styles.title}>Your Wishlist</h2>

            <main>
                {Object.keys(wishlistData).length > 0 ? (
                    <></>
                ) : (
                    <EmptyWishlist />
                )}
            </main>
        </div>
    );
}

export default function CartView() {
    const [activeTabName, setActiveTabName] = useState("cart");

    return (
        <section className={styles.container}>
            <TabBar
                tabs={[
                    {
                        label: "Cart",
                        name: "cart",
                        element: <BagView />,
                    },
                    {
                        label: "Wishlist",
                        name: "wishlist",
                        element: <WishlistView />,
                    },
                ]}
                active={activeTabName}
                onChange={(tabName) => setActiveTabName(tabName)}
            />
        </section>
    );
}
