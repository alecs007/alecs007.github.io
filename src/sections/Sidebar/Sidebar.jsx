import React from "react";
import styles from "./SidebarStyles.module.css";
import home from "../../assets/home.png";
import projects from "../../assets/projects.png";
import skills from "../../assets/skills.png";
import contact from "../../assets/contact.png";
import romanian from "../../assets/ro.png";
import english from "../../assets/en.png";

function Sidebar({ onToggleSidebar, isOpen, onToggleLanguage, text }) {
  return (
    <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <a className={styles.langbtna}>
        <button className={styles.langbtn} onClick={onToggleLanguage}>
          <img src={english} alt="English" className={styles.flag} />
          <span className={styles.slash}></span>
          <img src={romanian} alt="Romanian" className={styles.flag} />
        </button>
      </a>

      <div className={styles.sections}>
        <a className={styles.item} onClick={onToggleSidebar} href={"#hero"}>
          <img src={home} alt="Home" />
          <p>{text.home}</p>
        </a>
        <a className={styles.item} onClick={onToggleSidebar} href={"#projects"}>
          <img src={projects} alt="Projects" />
          <p>{text.projects}</p>
        </a>
        <a className={styles.item} onClick={onToggleSidebar} href={"#skills"}>
          <img src={skills} alt="Skills" />
          <p>{text.skills}</p>
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
