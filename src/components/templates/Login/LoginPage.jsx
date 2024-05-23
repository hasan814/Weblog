import { handleGithubLogin } from "@/utils/action";

const LoginPage = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
