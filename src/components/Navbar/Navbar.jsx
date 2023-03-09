import classNames from "classnames";
import { Link } from "react-router-dom";

import { Logo, Icon } from "./../../components";

import styles from "./navbar.module.scss";

export default function Navbar() {
    return (
        <div className={classNames("page-wrapper", styles.container)}>
            <Logo size={24} />

            <nav className={styles.primary}>
                <ul>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    <li>
                        <a href="/">Collections</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Help Center</a>
                    </li>
                </ul>
            </nav>

            <nav className={styles.secondary}>
                <ul>
                    <li>
                        <Link to="/cart">
                            <Icon name="bag" size={20} />
                            <span className={styles.badge}>7</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin">
                            <Icon name="user" size={20} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
