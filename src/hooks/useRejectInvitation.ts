import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("friendship/invitations/reject");

const useRejectInvitation = (
  token: string,
  username: string,
  shouldFetch: boolean
) =>
  useQuery({
    queryKey: ["reject invitation", token, username],
    queryFn: () => apiClient.postRejectInvitation(token, username),
    enabled: shouldFetch,
  });

export default useRejectInvitation;
