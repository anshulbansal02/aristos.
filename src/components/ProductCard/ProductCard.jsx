import { useDispatch, useSelector } from "react-redux";
import { toggleProductInWishlist } from "../../store/slices/wishlist";
import { Icon, Tag } from "./../../components";

import styles from "./product-card.module.scss";

export default function ProductCard({
    data: { id, tag, title, subtitle, price, images },
    onOpen,
}) {
    const dispatch = useDispatch();

    const wishlisted = useSelector((state) => Boolean(state.wishlist[id]));

    function handleWishlist() {
        dispatch(
            toggleProductInWishlist({
                productId: id,
            })
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img
                    className={styles.image}
                    src={images[0]}
                    alt={title}
                    onClick={() => onOpen(id)}
                />
                <button className={styles.wishlistBtn} onClick={handleWishlist}>
                    <Icon
                        name="heart"
                        size={24}
                        asSVG
                        fill={wishlisted ? "red" : "transparent"}
                    />
                </button>

                <div className={styles.label}>{tag && <Tag text={tag} />}</div>
            </div>
            <div className={styles.details} onClick={onOpen}>
                <p className="subtitle">{subtitle}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>₹ {price}</p>
            </div>
        </div>
    );
}
