import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import styles from "./signInOutLayout.module.css";
import { useState } from "react";

export interface IFormData {
  password: string;
  email: string;
  token?: string;
  username?: string;
}

export interface ISignup extends IFormData {
  username: string;
}

interface SignInUpLayoutProps {
  heading: string;
  btnText: string;
  dataShapeObj: IFormData;
  authFn: (arg: IFormData) => Promise<boolean>;
  // setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SignInUpLayout = ({
  heading,
  btnText,
  dataShapeObj,
  authFn,
}: SignInUpLayoutProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    ...dataShapeObj,
    email: dataShapeObj.email || "",
    password: dataShapeObj.password || "",
    username: dataShapeObj.username || "",
  });

  const dataShapeObjLength = Object.keys(dataShapeObj).length;

  const formFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter email",
      value: formData.email,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Enter password",
      value: formData.password,
    },
    {
      label: "Username",
      type: "username",
      name: "username",
      id: "username",
      placeholder: "Enter username",
      value: formData.username,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Flex height="90vh" className={styles.flexColumnCenter}>
      <Flex className={`${styles.flexColumnCenter} ${styles.container}`}>
        <Flex className={styles.flexColumnCenter} gap={2}>
          <Heading as="h2" fontSize="40px" textAlign="center">
            {heading}
          </Heading>
          <Text>to</Text>
          <Heading
            as="h2"
            fontSize="20px"
            textAlign="center"
            paddingBottom={10}
          >
            chatverse
          </Heading>
        </Flex>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const success = await authFn({
              email: formData.email,
              password: formData.password,
              username: formData.username,
            });
            console.log(success, heading);
            if (success && heading === "Login") navigate("/chats");
            else if (success && heading === "Sign Up") {
              console.log("entra");
              navigate("/login");
            }
          }}
        >
          {formFields.slice(0, dataShapeObjLength).map((field) => (
            <FormControl key={field.id} paddingBottom={3}>
              <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
              <Input
                required
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                value={field.value}
                onChange={handleInputChange}
              />
            </FormControl>
          ))}
          <Button type="submit" colorScheme="pink" width="100%" marginTop={5}>
            {btnText}
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default SignInUpLayout;
