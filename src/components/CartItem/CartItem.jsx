import { Stepper, Icon } from "./../../components";

import styles from "./cart-item.module.scss";

export default function CartItem({
    data: { id, cover, title, subtitle, size, price, description },
}) {
    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img
                    src="./assets/images/air-jordan-1-mid-se-craft-shoes-RmP7J6.jpeg"
                    alt="product"
                />
            </div>
            <div className={styles.details}>
                <div className={styles.row1}>
                    <div>
                        <p className={styles.subtitle}>{subtitle}</p>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.size}>Size: {size}</p>
                    </div>
                    <button className={styles.trashBtn}>
                        <Icon name="trash" size={20} color="#c80100" asSVG />
                    </button>
                </div>
                <div className={styles.row2}>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.row3}>
                    <p className={styles.price}>{price}</p>
                    <Stepper value="1 Pair" />
                </div>
            </div>
        </div>
    );
}
