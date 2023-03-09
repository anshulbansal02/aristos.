import classNames from "classnames";

import styles from "./tab-bar.module.scss";

export default function TabBar({ tabs = [], active }) {
    return (
        <div className={styles.container}>
            <ul className={classNames("page-wrapper", styles.tabs)}>
                {tabs.map((tab) => (
                    <li
                        className={classNames({
                            [styles.active]: active === tab,
                        })}
                    >
                        <button>{tab}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
