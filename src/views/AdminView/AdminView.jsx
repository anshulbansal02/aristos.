import { TabBar } from "../../components";

import styles from "./admin-view.module.scss";

export default function AdminView() {
    return (
        <section className={styles.container}>
            <TabBar tabs={["all", "listed", "unlisted"]} active="listed" />
        </section>
    );
}
