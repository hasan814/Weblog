import Links from "@/moduels/Links/Links";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Weblog
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Header;
