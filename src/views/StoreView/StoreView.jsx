import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
    TextBanner,
    ProductCard,
    Modal,
    ProductShowcase,
} from "../../components";

import styles from "./store-view.module.scss";

export default function StoreView() {
    const [isShowcaseOpen, setIsShowcaseOpen] = useState(false);

    const products = useSelector((state) => state.catalogue.products);

    function Listing() {
        return (
            <ul className={styles.listing}>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            data={product}
                            onOpen={() => setIsShowcaseOpen(true)}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <TextBanner>
                <p>
                    Summer sale is live! Save upto 50% on our exclusive
                    collections.
                </p>
            </TextBanner>

            <section className={classNames("page-wrapper", styles.container)}>
                <header>
                    <h2 className={styles.sectionTitle}>Sneaker Street</h2>
                    <p className={styles.sectionSubtitle}>
                        Crafted in present.
                        <br />
                        Sustainable for generations.
                    </p>
                </header>

                <main>{Listing()}</main>
            </section>

            <Modal
                isOpen={isShowcaseOpen}
                onOutsideClick={() => setIsShowcaseOpen(false)}
            >
                <ProductShowcase />
            </Modal>
        </>
    );
}
