import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("friendship/invitations/accept");

const useAcceptInvitation = (
  token: string,
  username: string,
  shouldFetch: boolean
) =>
  useQuery({
    queryKey: ["send invitation", token, username],
    queryFn: () => apiClient.postAcceptInvitation(token, username),
    enabled: shouldFetch,
  });

export default useAcceptInvitation;
