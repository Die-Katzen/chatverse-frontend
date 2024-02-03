import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/user/info");

const useUser = (token: string) =>
  useQuery({
    queryKey: ["user-info", token],
    queryFn: () => apiClient.getUserInfo(token),
  });
// useQuery(["user-info", token], () => apiClient.getUserInfo(token));

export default useUser;
