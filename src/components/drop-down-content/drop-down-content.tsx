import styles from "./drop-down-content.module.scss";

export function DropDownContent() {
  return (
    <>
      <div className={styles.dropDownMenuContent} onClick={(e) => e.stopPropagation()}>
        <h1>fullcontent</h1>
        <button>кнопка1</button>
        <button>кнопка2</button>
        <button>кнопка3</button>
        <button>кнопка4</button>
      </div>
    </>
  );
}
