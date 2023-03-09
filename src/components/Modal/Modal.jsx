import styles from "./modal.module.scss";

export default function Modal({}) {
    return (
        <div className="modal-container">
            <div className="modal-backdrop"></div>
            <div className="modal-window"></div>
        </div>
    );
}
