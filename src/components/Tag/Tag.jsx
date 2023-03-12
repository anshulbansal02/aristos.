import styles from "./tag.module.scss";

export default function Tag({ text }) {
    return (
        <div className={styles.wrapper}>
            <p>{text}</p>
        </div>
    );
}
