import { Suspense } from "react";
import { auth } from "@/utils/auth";

import styles from "./AdminPage.module.css";
import AdminPosts from "../AdminPosts/AdminPosts";
import AdminPostForm from "../AdminPostForm/AdminPostForm";
import AdminUsers from "../AdminUsers/AdminUsers";
import AdminUserFrom from "../AdminUserForm/AdminUserFrom";

const AdminPage = async () => {
  // ============ Session ===========
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminPostForm userId={session.user.id} />
          </Suspense>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminUserFrom />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
