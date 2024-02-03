import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("friendship/invitations/cancel");

const useCancelInvitation = (
  token: string,
  username: string,
  shouldFetch: boolean
) =>
  useQuery({
    queryKey: ["cancel invitation", token, username],
    queryFn: () => apiClient.postCancelInvitation(token, username),
    enabled: shouldFetch,
  });

export default useCancelInvitation;
