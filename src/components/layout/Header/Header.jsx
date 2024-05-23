import Links from "@/moduels/Links/Links";
import styles from "./Header.module.css";
import Link from "next/link";
import { auth } from "@/utils/auth";

const Header = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Weblog
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Header;
