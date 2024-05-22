import { v4 as uuidv4 } from "uuid";
import { NavLinks } from "@/utils/helper";

import styles from "./Links.module.css";
import Link from "next/link";

const Links = () => {
  return (
    <div>
      {NavLinks.map((link) => (
        <Link href={link.path} key={uuidv4()}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
