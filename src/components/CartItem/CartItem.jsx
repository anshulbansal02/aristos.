import { Stepper, Icon } from "./../../components";

import styles from "./cart-item.module.scss";

export default function CartItem(data) {
    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img src="./assets/images/air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg" />
            </div>
            <div className={styles.details}>
                <div className={styles.row1}>
                    <div>
                        <p className={styles.subtitle}>Men's Sneakers</p>
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
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium
                    </p>
                </div>
                <div className={styles.row3}>
                    <Stepper value="1 Pair" />
                    <p className={styles.price}>$149</p>
                </div>
            </div>
        </div>
    );
}
