import { TabBar, CartItem } from "./../../components";

import styles from "./cart.module.scss";

export default function Cart() {
    return (
        <section className={styles.container}>
            <TabBar tabs={["cart", "wishlist"]} active="cart" />

            <div className="page-wrapper">
                <h2 className={styles.title}>Your Bag</h2>

                <main>
                    <ul className={styles.items}>
                        <li>
                            <CartItem
                                data={{
                                    title: "Nike Pegasus Trail 4 GORE-TEX",
                                    subtitle: "Men's Sneaker",
                                    size: "UK 8",
                                    description:
                                        "Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition",
                                    price: "₹ 14599",
                                }}
                            />
                        </li>
                        <li>
                            <CartItem
                                data={{
                                    title: "Nike Pegasus Trail 4 GORE-TEX",
                                    subtitle: "Men's Sneaker",
                                    size: "UK 8",
                                    description:
                                        "Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition",
                                    price: "₹ 14599",
                                }}
                            />
                        </li>
                        <li>
                            <CartItem
                                data={{
                                    title: "Nike Pegasus Trail 4 GORE-TEX",
                                    subtitle: "Men's Sneaker",
                                    size: "UK 8",
                                    description:
                                        "Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition",
                                    price: "₹ 14599",
                                }}
                            />
                        </li>
                        <li>
                            <CartItem
                                data={{
                                    title: "Nike Pegasus Trail 4 GORE-TEX",
                                    subtitle: "Men's Sneaker",
                                    size: "UK 8",
                                    description:
                                        "Its waterproof GORE-TEX layer helps keep your feet dry, and less rubber in the outsole creates a smooth transition",
                                    price: "₹ 14599",
                                }}
                            />
                        </li>
                    </ul>
                    <div className={styles.billing}>
                        <h3>Order Summary</h3>

                        <table>
                            <tr>
                                <td>Number Of Items</td>
                                <td>6</td>
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
                        <button className={styles.btnSolid}>Proceed</button>
                    </div>
                </main>
            </div>
        </section>
    );
}
