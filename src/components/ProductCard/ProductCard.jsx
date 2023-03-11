import { Icon } from "./../../components";

import styles from "./product-card.module.scss";

export default function ProductCard({
    data: { tag, title, subtitle, price, images },
    onOpen,
}) {
    function handleWishlist() {}

    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img
                    className={styles.image}
                    src={images[0]}
                    alt={title}
                    onClick={onOpen}
                />
                <button className={styles.wishlistBtn} onClick={handleWishlist}>
                    <Icon name="heart" size={24} asSVG />
                </button>
                {tag && <p className={styles.tag}>{tag}</p>}
            </div>
            <div className={styles.details} onClick={onOpen}>
                <p className="subtitle">{subtitle}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>₹ {price}</p>
            </div>
        </div>
    );
}
