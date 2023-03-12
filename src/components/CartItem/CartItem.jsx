import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart";
import { Stepper, Icon } from "./../../components";

import styles from "./cart-item.module.scss";

export default function CartItem({ productId, quantity, size }) {
    const product = useSelector((state) =>
        state.catalogue.products.find((product) => product.id === productId)
    );

    const dispatch = useDispatch();

    function handleRemoveItem() {
        dispatch(
            removeFromCart({
                productId,
                size,
            })
        );
    }

    function decreaseQuantity() {
        dispatch(
            removeFromCart({
                productId,
                quantity: 1,
                size,
            })
        );
    }

    function increaseQuantity() {
        dispatch(
            addToCart({
                productId,
                quantity: 1,
                size,
            })
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className={styles.details}>
                <div className={styles.row1}>
                    <div>
                        <p className={styles.subtitle}>{product.subtitle}</p>
                        <h3 className={styles.title}>{product.title}</h3>
                        <p className={styles.size}>Size: {size}</p>
                    </div>
                    <button
                        className={styles.trashBtn}
                        onClick={handleRemoveItem}
                    >
                        <Icon name="trash" size={20} color="#c80100" asSVG />
                    </button>
                </div>
                <div className={styles.row2}>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.row3}>
                    <p className={styles.price}>{product.price}</p>
                    <Stepper
                        value={`${quantity} Pair${quantity > 1 ? "s" : ""}`}
                        onLeftClick={decreaseQuantity}
                        onRightClick={increaseQuantity}
                    />
                </div>
            </div>
        </div>
    );
}
