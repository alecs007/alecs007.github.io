import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../components/ProjectCard.jsx";
import profile1 from "../../assets/profile1.png";
import proiect_roma from "../../assets/proiect_roma.png";
import x from "../../assets/x.png";

function Projects({ text }) {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.projects}>
        <h1>{text.title}</h1>
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={proiect_roma}
          text={text.proiectroma}
          link="https://alecs007.github.io/proiect_roma/"
          h3="Proiect Roma"
          btn={text.btntext}
        />
        <ProjectCard
          src={x}
          text="proiect"
          link="./index.html#hero"
          h3="proiect"
          btn={text.btntext}
        />
        <ProjectCard
          src={x}
          text="proiect"
          link="./index.html#hero"
          h3="proiect"
          btn={text.btntext}
        />
        <ProjectCard
          src={x}
          text="proiect"
          link="./index.html#hero"
          h3="proiect"
          btn={text.btntext}
        />
      </div>
    </section>
  );
}

export default Projects;
