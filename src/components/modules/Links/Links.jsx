"use client";

import { v4 as uuidv4 } from "uuid";
import { NavLinks } from "@/utils/helper";
import { useState } from "react";

import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";

const Links = () => {
  // ========== State ============
  const [open, setOpen] = useState();
  const session = true;
  const isAdmin = true;

  // ========== Rendering ============
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {NavLinks.map((link) => (
          <NavLink key={uuidv4()} {...link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink title="Admin" path="/admin" />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink title="Login" path="/login" />
        )}
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {NavLinks.map((link) => (
            <NavLink {...link} key={uuidv4()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
