import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../../public/ProjectCard.jsx";
import profile1 from "../../assets/profile1.png";
import proiect_roma from "../../assets/proiect_roma.png";
import x from "../../assets/x.png";
// import coming_soon from "../../assets/coming_soon.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.projects}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={proiect_roma}
          link="https://alecs007.github.io/proiect_roma/"
          h3="Proiect Roma"
        />
        <ProjectCard src={x} link="./index.html#hero" h3="proiect" />
        <ProjectCard src={x} link="./index.html#hero" h3="proiect" />
        <ProjectCard src={x} link="./index.html#hero" h3="proiect" />
      </div>
    </section>
  );
}

export default Projects;
