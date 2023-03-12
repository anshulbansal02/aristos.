import { useSelector } from "react-redux";
import { TabBar, CartItem } from "../../components";

import styles from "./cart-view.module.scss";

export default function CartView() {
    const cartData = useSelector((state) => state.cart);

    return (
        <section className={styles.container}>
            <TabBar tabs={["cart", "wishlist"]} active="cart" />

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
                                    <tr>
                                        <td>Number Of Items</td>
                                        <td>{cartData.itemsCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>₹ 21999</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charges</td>
                                        <td>+ ₹ 350</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>- ₹ 875</td>
                                    </tr>
                                    <tr>
                                        <td>Payable</td>
                                        <td>₹ 21474</td>
                                    </tr>
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
                                <button className={styles.btnSolid}>
                                    Proceed
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <img src="./assets/icons/shopping-bag.png" />
                            <div>
                                <h2>Uh oh! Your bag is empty</h2>
                                <p>Do some shopping bruh.</p>
                                <button>Go To Store</button>
                            </div>
                        </>
                    )}
                </main>
            </div>
        </section>
    );
}
