import { v4 as uuidv4 } from "uuid";
import { getUsers } from "@/utils/Data";

import styles from "./AdminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/utils/action";

const AdminUsers = async () => {
  // ======== Fetch Data ==========
  const users = await getUsers();

  // ======== Rendering ==========
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={uuidv4()}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noavatar.png"}
              alt="users"
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userBtn}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
