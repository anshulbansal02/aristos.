import styles from "./badge.module.scss";

export default function Badge({ text }) {
    return <span className={styles.wrapper}>{text}</span>;
}
