import { MessageObj } from "../utils/types";
import APIClient from "./api-client";

const apiClient = new APIClient("/message/direct/latest");

export const getMessages = async (
  token: string,
  username: string
): Promise<MessageObj[]> => {
  const data = await apiClient.getMessages(token, username);
  const messages: MessageObj[] = data.messages;
  return messages;
};
