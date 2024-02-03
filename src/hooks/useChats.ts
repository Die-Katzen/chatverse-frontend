import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/message/direct/home");

const useChats = (token: string) =>
  useQuery({
    queryKey: ["chats", token],
    queryFn: () => apiClient.getChats(token),
  });

export default useChats;
