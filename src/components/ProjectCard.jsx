import styles from "../sections/Projects/ProjectsStyles.module.css";

function ProjectCard({ src, text, link, h3, btn }) {
  return (
    <div>
      <div className={styles.imgcontainer}>
        <img src={src} alt={`${h3} logo`} />
        <div className={styles.details}>
          <p>{text}</p>
          <a href={link} target="_blank">
            <button>{btn}</button>
          </a>
        </div>
      </div>
      <a href={link} target="_blank">
        <h3>{h3}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;
