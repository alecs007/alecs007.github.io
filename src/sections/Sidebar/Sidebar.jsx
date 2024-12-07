import styles from "./SidebarStyles.module.css";
import home from "../../assets/home.png";
import projects from "../../assets/projects.png";
import skills from "../../assets/skills.png";
import contact from "../../assets/contact.png";

function Sidebar({ onToggleSidebar, isOpen }) {
  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sections}>
        <a className={styles.item} onClick={onToggleSidebar} href={"#hero"}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </a>
        <a className={styles.item} onClick={onToggleSidebar} href={"#projects"}>
          <img src={projects} alt="Projects" />
          <p>Projects</p>
        </a>
        <a className={styles.item} onClick={onToggleSidebar} href={"#skills"}>
          <img src={skills} alt="Skills" />
          <p>Skills</p>
        </a>
        <a className={styles.item} onClick={onToggleSidebar} href={"#contact"}>
          <img src={contact} alt="Contact" />
          <p>Contact</p>
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
