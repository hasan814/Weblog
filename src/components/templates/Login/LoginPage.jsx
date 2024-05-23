import { handleGithubLogin, login } from "@/utils/action";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="Username ..." name="username" />
        <input type="password" placeholder="Password ..." name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
