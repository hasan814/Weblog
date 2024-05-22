import Image from "next/image";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image fill alt="Contact" className={styles.img} src={"/contact.png"} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="Email..." />
          <input type="text" placeholder="PhoneNumber..." />
          <textarea cols={30} rows={10} placeholder="Message..."></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
