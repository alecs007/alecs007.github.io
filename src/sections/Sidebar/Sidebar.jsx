import styles from "./SidebarStyles.module.css";

function Sidebar({ onToggleSidebar, isOpen }) {
  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <a onClick={onToggleSidebar} href={"#projects"}>
        Home
      </a>
    </section>
  );
}

export default Sidebar;
