import styles from "../sections/Contact/ContactStyles.module.css";

function ContactItem({ src, text, link }) {
  return (
    <div className={styles.contactItem}>
      <img src={src} alt={`${text} image`} />
      <span className={styles.bar}></span>
      <a href={link} target="_blank">
        {" "}
        <p>{text}</p>
      </a>
    </div>
  );
}

export default ContactItem;
