import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer>
      <hr className={styles.line}></hr>
      <p className={styles.copyright}>
        All rights reserved &copy; 2024 Alex Rotar
      </p>
    </footer>
  );
}

export default Footer;
