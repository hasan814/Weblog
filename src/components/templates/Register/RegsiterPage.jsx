import styles from "./RegisterPage.module.css";
import RegisterForm from "@/moduels/RegisterForm/RegisterForm";

const RegsiterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegsiterPage;
