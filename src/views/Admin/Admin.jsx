import { TabBar } from "./../../components";

import styles from "./admin.module.scss";

export default function Admin() {
    return (
        <section className={styles.container}>
            <TabBar tabs={["all", "listed", "unlisted"]} active="listed" />
        </section>
    );
}
