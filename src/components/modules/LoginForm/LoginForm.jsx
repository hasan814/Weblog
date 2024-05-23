"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/action";

import styles from "./LoginForm.module.css";
import Link from "next/link";

const LoginForm = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= FormState ============
  const [state, formAction] = useFormState(login, undefined);

  // ============= Rendering ============
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="Username ..." name="username" />
        <input type="password" placeholder="Password ..." name="password" />

        <button>Login</button>
        {state?.error}
        <Link href={"/register"}>
          Don&apos;t Have an account? <b>Register</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
