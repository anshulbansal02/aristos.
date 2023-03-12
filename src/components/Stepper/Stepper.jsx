import { Icon } from "./../../components";

import styles from "./stepper.module.scss";

export default function Stepper({ value, onLeftClick, onRightClick }) {
    return (
        <div className={styles.container}>
            <button onClick={onLeftClick}>
                <Icon name="minus" size={16} />
            </button>
            <span className={styles.value}>{value}</span>
            <button onClick={onRightClick}>
                <Icon name="plus" size={16} />
            </button>
        </div>
    );
}
