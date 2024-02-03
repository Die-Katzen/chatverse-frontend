import { useAuth } from "../../hooks/useAuth";
import SignInUpLayout, { IFormData } from "../Layouts/SignInUpLayout";

const Login = () => {
  const dataShapeObj: IFormData = {
    email: "",
    password: "",
  };

  const { login } = useAuth();

  return (
    <SignInUpLayout
      heading="Login"
      btnText="Submit"
      dataShapeObj={dataShapeObj}
      authFn={login}
    />
  );
};

export default Login;
