"use client";

import { useFormState } from "react-dom";
import { addUser } from "@/utils/action";

import styles from "./AdminUserForm.module.css";

const AdminPostForm = () => {
  // =========== State =========
  const [state, formAction] = useFormState(addUser, undefined);

  // =========== Rendering =========
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="text" name="username" placeholder="UserName ...." />
      <input type="text" name="email" placeholder="Email ...." />
      <input type="password" name="password" placeholder="Password ...." />
      <input type="text" name="img" placeholder="Img ...." />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
