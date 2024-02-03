import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { IFormData } from "../components/Layouts/SignInUpLayout";

const apiClient = new APIClient("/user");

const useSignup = () =>
  useMutation<IFormData, Error, IFormData>({
    mutationFn: (formData) => apiClient.signupRequest(formData),
  });

export default useSignup;
