import { Icon } from "./../../components";

import styles from "./stepper.module.scss";

export default function Stepper({ value }) {
    return (
        <div className={styles.container}>
            <button>
                <Icon name="chevron-left" size={16} />
            </button>
            <span className={styles.value}>{value}</span>
            <button>
                <Icon name="chevron-right" size={16} />
            </button>
        </div>
    );
}
