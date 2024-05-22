"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./NavLink.module.css";

const NavLink = ({ title, path }) => {
  // ============ PathName ============
  const pathname = usePathname();

  // ============ Rendering ============
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathname === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
