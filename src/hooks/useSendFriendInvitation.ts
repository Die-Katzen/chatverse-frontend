import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("friendship/invitations/send");

const useSendFriendInvitation = (
  token: string,
  username: string,
  shouldFetch: boolean
) =>
  useQuery({
    queryKey: ["add friend", token, username],
    queryFn: () => apiClient.postSendFriendInvitation(token, username),
    enabled: shouldFetch,
  });

export default useSendFriendInvitation;
