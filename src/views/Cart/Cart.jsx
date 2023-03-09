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
                            <CartItem data={{}} />
                        </li>
                    </ul>
                    <div className={styles.billing}></div>
                </main>
            </div>
        </section>
    );
}
