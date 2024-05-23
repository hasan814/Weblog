import { register } from "@/utils/action";
import styles from "./RegisterPage.module.css";

const RegsiterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="Username ..." name="username" />
          <input type="email" placeholder="Email ..." name="email" />
          <input type="password" placeholder="Password ..." name="password" />
          <input
            type="password"
            placeholder="Confirm Password ..."
            name="passwordRepeat"
          />
          <button>Regsiter</button>
        </form>
      </div>
    </div>
  );
};

export default RegsiterPage;
