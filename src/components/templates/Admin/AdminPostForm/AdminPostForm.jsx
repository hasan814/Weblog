"use client";

import { addPost } from "@/utils/action";
import { useFormState } from "react-dom";

import styles from "./AdminPostForm.module.css";

const AdminPostForm = ({ userId }) => {
  // =========== State =========
  const [state, formAction] = useFormState(addPost, undefined);

  // =========== Rendering =========
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title ...." />
      <input type="text" name="slug" placeholder="Slug ...." />
      <input type="text" name="img" placeholder="Image ...." />
      <textarea
        type="text"
        name="desc"
        placeholder="description ..."
        rows={10}
      ></textarea>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
