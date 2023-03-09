import styles from "./product-showcase.module.scss";

export default function ProductShowcase() {
    return (
        <div className="showcase">
            <div className="showcase-col">
                <div className="showcase-cover">
                    <img src="./assets/images/94eb686a-b427-45ec-9026-d81a893f3ae6.webp" />
                </div>
                <ul className="showcase-thumbnails">
                    <li>
                        <img src="./assets/images/9adf6ce4-9235-498a-86c4-2430a6e4cdad.webp" />
                    </li>
                    <li className="selected">
                        <img src="./assets/icons/arrow-up.svg" />
                    </li>
                    <li>
                        <img src="./assets/images/1f239f47-eee3-4f5e-9654-4793a2ba1b1c.webp" />
                    </li>
                    <li>
                        <img src="./assets/images/12102bb5-262e-4b31-a29d-b8ee0b8ea20b.webp" />
                    </li>
                    <li>
                        <img src="./assets/images/cfb2bbdf-facc-4c7d-a55a-e995710dcb6d.webp" />
                    </li>
                </ul>
            </div>
            <div className="showcase-col showcase-details">
                <h2 className="showcase-title">Air Jordan 1 Mid SE Craft</h2>
                <h3 className="showcase-price">$230</h3>
                <p className="showcase-description">
                    Channel new levels of speed and power in shoes designed for
                    Zion and built for ballers at any level. An adjustable strap
                    up top helps lock your foot in place while a firm midsole
                    supports high-paced play. A wider outsole provides extra
                    stability—perfect for playing on outdoor courts. And the
                    Zion 2 has more Air cushioning than its predecessor, so
                    you'll get into the clouds easier and land softer.
                </p>
                <div className="btn-group">
                    <button className="btn-solid">Add To Bag</button>
                    <button className="btn-ghost">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
}
