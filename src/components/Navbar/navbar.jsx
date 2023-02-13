import styles from "./navbar.module.css";
import React, {useState} from 'react';

export default function Navbar() {

  const [isSearchFocus, setFoucs] = useState(false);



  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <span className={`material-symbols-outlined ${styles.navIcon} ${styles.hamburger}`}>
          menu
        </span>
        <img
          className={styles.navLogo}
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
        />
        <h3 className={styles.navHeading}>React-Keep</h3>
      </div>

      <div className={styles.navCenter}>
        <span className={`material-symbols-outlined ${styles.navIcon} ${styles.searchIcon} ${isSearchFocus ? styles.searchIconFocused : ''}`}> search </span>
        <input placeholder="Search" className={styles.navSearch} onFoucs={() => setFoucs(true)} onBlur={() => setFoucs(false)}/>
      </div>

      <div className={styles.navRight}>
        <span className={`material-symbols-outlined ${styles.navIcon}`}>restart_alt</span>
        <span className={`material-symbols-outlined ${styles.navIcon}`}> view_list</span>
        <span className={`material-symbols-outlined ${styles.navIcon}`}> settings</span>
        <span className={`material-symbols-outlined ${styles.navIcon}`}> apps </span>
        <span className={`material-symbols-outlined ${styles.navIcon}`}> account_circle</span>
      </div>
    </div>
  );
}
