import classNames from "classnames";

import { TextBanner, ProductCard } from "./../../components";

import styles from "./store.module.scss";

export default function Store() {
    const catalogue = [
        {
            id: 1,
            title: "Nike Air Force 1 '07 LV8",
            price: 140,
        },
        {
            id: 2,
            title: "Nike Pegasus Trail 4 GORE-TEX",
            price: 230,
            tag: "New Arrival",
        },
        {
            id: 3,
            title: "Nike Air Force 1 '07 LV8",
            price: 140,
        },
        {
            id: 4,
            title: "Nike Pegasus Trail 4 GORE-TEX",
            price: 230,
            tag: "New Arrival",
        },
    ];

    function Listing() {
        return (
            <ul className={styles.listing}>
                {catalogue.map((product) => (
                    <li key={product.id}>
                        <ProductCard data={product} />
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
        </>
    );
}
