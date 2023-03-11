import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

const portal = document.getElementById("portal");

export default function Modal({ children, isOpen, onOutsideClick }) {
    return createPortal(
        isOpen && (
            <div className={styles.container}>
                <div
                    className={styles.backdrop}
                    onClick={(e) => {
                        if (onOutsideClick && e.target === e.currentTarget)
                            onOutsideClick();
                    }}
                />
                <div className={styles.window}>{children}</div>
            </div>
        ),
        portal
    );
}
