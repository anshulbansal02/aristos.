import { Stepper, Icon, TabBar } from "./../../components";

import styles from "./cart.module.scss";

export default function Cart() {
    return (
        <section className={styles.container}>
            <TabBar tabs={["cart", "wishlist"]} active="cart" />

            <div className="page-wrapper">
                <h2 className={styles.title}>Your Bag</h2>

                <ul className={styles.cartItems}>
                    <li>
                        <div className={styles.cover}>
                            <img src="./assets/images/air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.row1}>
                                <div>
                                    <p className={styles.subtitle}>
                                        Men's Sneakers
                                    </p>
                                    <h3 className={styles.itemTitle}>
                                        Nike Air Force 1 '07 LV8
                                    </h3>
                                    <p className={styles.size}>Size: UK 8</p>
                                </div>
                                <button className={styles.trashBtn}>
                                    <Icon name="trash" />
                                </button>
                            </div>
                            <div className={styles.row2}>
                                <p className={styles.description}>
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium
                                </p>
                            </div>
                            <div className={styles.row3}>
                                <Stepper value="1 Pair" />
                                <p className={styles.price}>$149</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={styles.billing}></div>
            </div>
        </section>
    );
}
