import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("message/direct");

const useSendMessage = (
  token: string,
  toUsername: string,
  message: string,
  shouldFetch: boolean
) =>
  useQuery({
    queryKey: ["send message", token, toUsername, message],
    queryFn: () => apiClient.postSendMessage(token, toUsername, message),
    enabled: shouldFetch,
  });

export default useSendMessage;
