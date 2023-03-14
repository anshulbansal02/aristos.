import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Icon, TabBar } from "../../components";
import { clipText } from "../../utils";

import styles from "./admin-view.module.scss";

function ProductListing({ filter }) {
    function filteredProductsList(products) {
        if (filter === "listed")
            return products.filter((product) => product.listed);
        if (filter === "unlisted")
            return products.filter((product) => !product.listed);
        return products;
    }

    const products = useSelector((state) =>
        filteredProductsList(state.catalogue.products)
    );

    return (
        <section className="page-wrapper">
            <table className={styles.listingTable}>
                <thead>
                    <tr>
                        <td>Serial No.</td>
                        <td>Product Id</td>
                        <td>Price (INR)</td>
                        <td>Title</td>
                        <td>Subtitle</td>
                        <td>Description</td>
                        <td>Sizes</td>
                        <td>Listed</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{product.id}</td>
                            <td>{product.price}</td>
                            <td>{product.title}</td>
                            <td>{product.subtitle}</td>
                            <td>{clipText(product.description, 64)}</td>
                            <td>{product.sizes.join(", ")}</td>
                            <td>{product.listed ? "Listed" : "Unlisted"}</td>
                            <td>
                                <ul className={styles.actions}>
                                    <li>
                                        <button className={styles.editBtn}>
                                            <Icon name="edit" size={16} />
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={classNames({
                                                [styles.enlistBtn]:
                                                    !product.listed,
                                                [styles.delistBtn]:
                                                    product.listed,
                                            })}
                                        >
                                            <Icon
                                                name={
                                                    product.listed
                                                        ? "file-minus"
                                                        : "file-plus"
                                                }
                                                size={16}
                                            />
                                        </button>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default function AdminView() {
    const [activeTabName, setActiveTabName] = useState("all");

    return (
        <section className={styles.container}>
            <TabBar
                tabs={[
                    {
                        label: "All",
                        name: "all",
                        element: <ProductListing filter="all" />,
                    },
                    {
                        label: "Listed",
                        name: "listed",
                        element: <ProductListing filter="listed" />,
                    },
                    {
                        label: "Unlisted",
                        name: "unlisted",
                        element: <ProductListing filter="unlisted" />,
                    },
                ]}
                active={activeTabName}
                onChange={(tabName) => setActiveTabName(tabName)}
            />
        </section>
    );
}
