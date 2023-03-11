import classNames from "classnames";

import { Icon } from "./../../components";

import styles from "./product-showcase.module.scss";

export default function ProductShowcase() {
    return (
        <div className={styles.container}>
            <div className={styles.col}>
                <div className={styles.cover}>
                    <img src="./assets/images/94eb686a-b427-45ec-9026-d81a893f3ae6.webp" />
                </div>
                <ul className={styles.thumbnails}>
                    <li>
                        <img src="./assets/images/9adf6ce4-9235-498a-86c4-2430a6e4cdad.webp" />
                    </li>
                    <li className={styles.selected}>
                        <Icon name="arrow-up" size={40} />
                    </li>
                    <li>
                        <img src="./assets/images/1f239f47-eee3-4f5e-9654-4793a2ba1b1c.webp" />
                    </li>
                    <li>
                        <img src="./assets/images/12102bb5-262e-4b31-a29d-b8ee0b8ea20b.webp" />
                    </li>
                    <li>
                        <img src="./assets/images/cfb2bbdf-facc-4c7d-a55a-e995710dcb6d.webp" />
                    </li>
                </ul>
            </div>
            <div className={classNames(styles.col, styles.details)}>
                <h2 className={styles.title}>Air Jordan 1 Mid SE Craft</h2>
                <h3 className={styles.price}>$230</h3>

                <div className={styles.sizeChart}>
                    <h5>Select Size</h5>
                    <ul className={styles.sizes}>
                        <li>
                            <button>UK 6 (EU 40)</button>
                        </li>
                        <li>
                            <button>UK 6.5</button>
                        </li>
                        <li>
                            <button>UK 7</button>
                        </li>
                        <li>
                            <button>UK 7.5</button>
                        </li>
                        <li>
                            <button>UK 8</button>
                        </li>
                        <li>
                            <button>UK 8.5</button>
                        </li>
                        <li>
                            <button>UK 9</button>
                        </li>
                        <li>
                            <button>UK 9.5</button>
                        </li>
                        <li>
                            <button>UK 10</button>
                        </li>
                        <li>
                            <button>UK 10.5</button>
                        </li>
                        <li>
                            <button>UK 11</button>
                        </li>
                    </ul>
                </div>

                <p className={styles.description}>
                    Channel new levels of speed and power in shoes designed for
                    Zion and built for ballers at any level. An adjustable strap
                    up top helps lock your foot in place while a firm midsole
                    supports high-paced play. A wider outsole provides extra
                    stability—perfect for playing on outdoor courts.
                </p>

                <div className={styles.btnGroup}>
                    <button className={styles.btnSolid}>Add To Bag</button>
                    <button className={styles.btnGhost}>Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
}
