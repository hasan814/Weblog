import LoginPage from "@/templates/Login/LoginPage";
import { auth } from "@/utils/auth";

const Login = async () => {
  const session = await auth();
  console.log(session);
  return <LoginPage />;
};

export default Login;
