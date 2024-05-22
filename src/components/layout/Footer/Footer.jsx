import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Weblog</div>
      <h1 className={styles.text}>
        Develeoped by <span>hasan moosavi</span>&copy; all right reserved
      </h1>
    </div>
  );
};

export default Footer;
