import React from "react";
import styles from "./HeaderStyles.module.css";

function Header({ onToggleSidebar, isSidebarOpen }) {
  return (
    <header>
      <div
        onClick={onToggleSidebar}
        className={`${styles.togglebutton} ${isSidebarOpen ? styles.open : ""}`}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
}

export default Header;
