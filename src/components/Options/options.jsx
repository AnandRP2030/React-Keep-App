import styles from "./options.module.css";

function Options({ active, emojiName, title }) {
  return (
    <div className={`${styles.box} ${active ? styles.bgBrown : ""}`}>
      <div className={styles.icons}>
        <span className={`material-symbols-outlined`}>{emojiName}</span>
      </div>

      <div className={styles.labels}>
        <h3> {title}</h3>
      </div>
    </div>
  );
}

export { Options };
