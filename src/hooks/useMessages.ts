import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/message/direct/latest");

const useMessages = (token: string, username: string) =>
  useQuery({
    queryKey: ["add friend search", token, username],
    queryFn: () => apiClient.getMessages(token, username),
  });

export default useMessages;
