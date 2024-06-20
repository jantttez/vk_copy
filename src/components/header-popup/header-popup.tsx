import styles from "./header-popup.module.scss";

export function HeaderPopup() {
  return (
    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <button onClick={() => console.log("нажата")}>нажми</button>
    </div>
  );
}
