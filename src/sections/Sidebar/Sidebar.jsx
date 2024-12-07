import styles from "./SidebarStyles.module.css";

function Sidebar({ onToggleSidebar, isOpen }) {
  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <a onClick={onToggleSidebar} href={"#hero"}>
        Home
      </a>
      <a onClick={onToggleSidebar} href={"#projects"}>
        Projects
      </a>
    </section>
  );
}

export default Sidebar;
