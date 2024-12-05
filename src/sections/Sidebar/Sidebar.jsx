import styles from "./SidebarStyles.module.css";

function Sidebar({ isOpen }) {
  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      1123
    </section>
  );
}

export default Sidebar;
