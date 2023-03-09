import classNames from "classnames";

import styles from "./text-banner.module.scss";

export default function TextBanner({ children }) {
    return (
        <div className={styles.container}>
            <div className={classNames("page-wrapper", styles.content)}>
                {children}
            </div>
        </div>
    );
}
