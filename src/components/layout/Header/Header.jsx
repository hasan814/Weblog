import Links from "@/moduels/Links/Links";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Weblog</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Header;
