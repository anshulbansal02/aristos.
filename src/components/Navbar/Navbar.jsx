import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo, Icon, Badge } from "./../../components";

import styles from "./navbar.module.scss";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className="page-wrapper">
                <Logo size={24} />

                <nav
                    className={classNames(styles.primary, {
                        [styles.open]: isMenuOpen,
                    })}
                >
                    <ul>
                        <li>
                            <Link
                                to="/store"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Store
                            </Link>
                        </li>
                        <li>
                            <a href="/" onClick={() => setIsMenuOpen(false)}>
                                Collections
                            </a>
                        </li>
                        <li>
                            <a href="/" onClick={() => setIsMenuOpen(false)}>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/" onClick={() => setIsMenuOpen(false)}>
                                Help Center
                            </a>
                        </li>
                    </ul>

                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Icon name={isMenuOpen ? "cross" : "menu"} size={24} />
                    </button>
                </nav>

                <nav className={styles.secondary}>
                    <ul>
                        <li>
                            <Link to="/cart">
                                <Icon name="bag" size={20} asSVG />
                                <Badge text="4" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin">
                                <Icon name="user" size={20} asSVG />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
