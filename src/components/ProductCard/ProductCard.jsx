import { Icon } from "./../../components";

import styles from "./product-card.module.scss";

export default function ProductCard({
    data: { id, cover, tag, title, price },
}) {
    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img
                    className={styles.image}
                    src="./assets/images/19b9c4f4-8af9-47ba-9491-52be0849e48e.webp"
                    alt="Product"
                />
                <button className={styles.wishlistBtn}>
                    <Icon name="heart" size={20} />
                </button>
                {tag && <p className={styles.tag}>{tag}</p>}
            </div>
            <div className={styles.details}>
                <div>
                    <p className={styles.subtitle}>Men's Shoes | 6 sizes</p>

                    <p className={styles.title}>{title}</p>
                </div>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
    );
}
