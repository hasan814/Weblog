"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { register } from "@/utils/action";

import styles from "./RegisterForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= FormState ============
  const [state, formAction] = useFormState(register, undefined);

  // ============= Effect ============
  useEffect(() => {
    state?.success && router.push("/login");
  }, [router, state?.success]);

  // ============= Rendering ============
  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <input type="text" placeholder="Username ..." name="username" />
        <input type="email" placeholder="Email ..." name="email" />
        <input type="password" placeholder="Password ..." name="password" />
        <input
          type="password"
          placeholder="Confirm Password ..."
          name="passwordRepeat"
        />
        <button>Regsiter</button>
        {state?.error}
        <Link href={"/login"}>
          Have an account? <b>Login</b>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
