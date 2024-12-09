import React from "react";
import styles from "./FooterStyles.module.css";

function Footer({ text }) {
  return (
    <footer>
      <hr className={styles.line}></hr>
      <p className={styles.copyright}>{text.title}&copy; 2024 Alex Rotar</p>
    </footer>
  );
}

export default Footer;
