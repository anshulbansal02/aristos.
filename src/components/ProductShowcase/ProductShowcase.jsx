import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart";
import { toggleProductInWishlist } from "../../store/slices/wishlist";

import { Icon, Stepper } from "./../../components";

import styles from "./product-showcase.module.scss";

export default function ProductShowcase({ productId }) {
    const product = useSelector((state) =>
        state.catalogue.products.find((product) => productId === product.id)
    );
    const wishlisted = useSelector((state) =>
        Boolean(state.wishlist[productId])
    );

    const dispatch = useDispatch();

    function handleWishlist() {
        dispatch(
            toggleProductInWishlist({
                productId,
            })
        );
    }

    function handleAddToCart() {
        dispatch(
            addToCart({
                productId,
                quantity: 1,
                size: selectedSize,
                price: product.price,
            })
        );
    }

    function handleRemoveFromCart() {
        dispatch(
            removeFromCart({ productId, quantity: 1, size: selectedSize })
        );
    }

    const [coverInView, setCoverInView] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(null);

    const quantityInCart = useSelector(
        (state) => state.cart.items[`${productId}#${selectedSize}`]?.quantity
    );

    return (
        <div className={styles.container}>
            <div className={styles.col}>
                <div className={styles.cover}>
                    <img src={coverInView} alt={product.title} />
                </div>
                <ul className={styles.thumbnails}>
                    {product.images.map((image) => (
                        <li
                            key={image}
                            onClick={() => setCoverInView(image)}
                            className={classNames({
                                [styles.selected]: coverInView === image,
                            })}
                        >
                            {coverInView === image ? (
                                <Icon name="arrow-up" size={40} />
                            ) : (
                                <img src={image} alt={product.title} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={classNames(styles.col, styles.details)}>
                <h2 className={styles.title}>{product.title}</h2>
                <h3 className={styles.price}>₹ {product.price}</h3>

                <div className={styles.sizeChart}>
                    <h5>Select Size</h5>
                    <ul className={styles.sizes}>
                        {product.sizes.map((size) => (
                            <li key={size}>
                                <button
                                    onClick={() => setSelectedSize(size)}
                                    className={classNames({
                                        [styles.selected]:
                                            size === selectedSize,
                                    })}
                                >
                                    {size}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.btnGroup}>
                    {quantityInCart ? (
                        <Stepper
                            value={`${quantityInCart} In Bag`}
                            onLeftClick={handleRemoveFromCart}
                            onRightClick={handleAddToCart}
                        />
                    ) : (
                        <button
                            className={styles.btnSolid}
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                        >
                            Add To Bag
                        </button>
                    )}

                    <button
                        className={styles.btnGhost}
                        onClick={handleWishlist}
                    >
                        {wishlisted
                            ? "Remove From Wishlist"
                            : "Add To Wishlist"}
                    </button>
                </div>

                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    );
}
