import classNames from "classnames";

import styles from "./tab-bar.module.scss";

export default function TabBar({ tabs = [], active, onChange }) {
    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <ul className={classNames("page-wrapper", styles.tabs)}>
                    {tabs.map((tab) => (
                        <li
                            className={classNames({
                                [styles.active]: active === tab.name,
                            })}
                            key={tab.name}
                        >
                            <button
                                onClick={() => onChange && onChange(tab.name)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.outlet}>
                {tabs.find((tab) => tab.name === active).element}
            </div>
        </div>
    );
}
