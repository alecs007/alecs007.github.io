import styles from "./ContactStyles.module.css";
import ContactItem from "../../components/ContactItem";
import instagram from "../../assets/instagram2.png";
import facebook from "../../assets/facebook2.png";
import github from "../../assets/github2.png";
import reddit from "../../assets/reddit2.png";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1>Contact</h1>
      <ContactItem
        src={instagram}
        text="@alexro_007"
        link="https://www.instagram.com/alexro_007/"
      />
      <ContactItem
        src={github}
        text="@alecs007"
        link="https://github.com/alecs007"
      />
      <ContactItem
        src={facebook}
        text="Alexandru Rotar"
        link="https://www.facebook.com/alegzro007"
      />
      <ContactItem
        src={reddit}
        text="@alecs007"
        link="https://www.reddit.com/user/Plastic_Memory593/"
      />
      <p className={styles.email}>
        Or you can contact me via email:{" "}
        <a href="mailto:alexro007@yahoo.com">alexro007@yahoo.com</a>
      </p>
    </section>
  );
}

export default Contact;
