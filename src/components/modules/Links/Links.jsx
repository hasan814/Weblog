"use client";

import { v4 as uuidv4 } from "uuid";
import { NavLinks } from "@/utils/helper";
import { useState } from "react";

import styles from "./Links.module.css";
import NavLink from "../NavLink/NavLink";
import Image from "next/image";
import { handleLogOut } from "@/utils/action";

const Links = ({ session }) => {
  // ========== State ============
  const [open, setOpen] = useState();

  // ========== Rendering ============
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {NavLinks.map((link) => (
          <NavLink key={uuidv4()} {...link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink title="Admin" path="/admin" />}
            <form action={handleLogOut}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink title="Login" path="/login" />
        )}
      </div>
      <Image
        src={"/menu.png"}
        alt="menu"
        width={30}
        height={30}
        className={styles.menuBtn}
        onClick={() => setOpen((prev) => !prev)}
      />
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
