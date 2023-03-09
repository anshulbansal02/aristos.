import styles from "./logo.module.scss";

export default function Logo({ size = 16 }) {
    return (
        <div>
            <h1 className={styles.text} style={{ fontSize: `${size / 10}rem` }}>
                Aristos.
            </h1>
        </div>
    );
}
