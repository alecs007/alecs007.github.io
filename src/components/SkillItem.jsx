import styles from "../sections/Skills/SkillsStyles.module.css";
function SkillItem({ src, text, bdColor }) {
  return (
    <div className={styles.skillItem} style={{ borderColor: bdColor }}>
      <img src={src} alt="${text} image" />
      <p>{text}</p>
    </div>
  );
}

export default SkillItem;
