import styles from "./footer.module.css";
import React, { useState } from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  return (
    <div className={styles.footer}>
      <p> copyright © {year}</p>
    </div>
  );
}
