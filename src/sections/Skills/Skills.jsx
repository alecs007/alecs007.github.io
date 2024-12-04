import styles from "./SkillsStyles.module.css";
import SkillItem from "../../../public/SkillItem.jsx";
import profile1 from "../../assets/profile1.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import node from "../../assets/node-js.png";
import C from "../../assets/c-.png";
import git from "../../assets/git.png";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <SkillItem src={react} text="React" bdColor="#61DAFB" />
        <SkillItem src={node} text="Node.js" bdColor="#8CC84B" />
        <SkillItem src={js} text="JavaScript" bdColor="#F7DF1E" />
        <SkillItem src={html} text="HTML" bdColor="#E44D26" />
        <SkillItem src={css} text="CSS" bdColor="#1572B6" />
        <SkillItem src={C} text="C++" bdColor="#00599C" />
        <SkillItem src={git} text="Git" bdColor="#D32F2F" />
      </div>
    </section>
  );
}

export default Skills;
