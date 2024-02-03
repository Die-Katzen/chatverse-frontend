import { useAuth } from "../../hooks/useAuth";
import SignInUpLayout, { IFormData } from "../Layouts/SignInUpLayout";

const SignUp = () => {
  const dataShapeObj: IFormData = {
    username: "",
    password: "",
    email: "",
  };

  const { signup } = useAuth();

  return (
    <SignInUpLayout
      heading="Sign Up"
      btnText="Submit"
      dataShapeObj={dataShapeObj}
      authFn={signup}
    />
  );
};

export default SignUp;
