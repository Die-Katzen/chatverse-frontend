import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/friendship/invitations/open");

const useOpenInvitations = (token: string) =>
  useQuery({
    queryKey: ["invitations", token],
    queryFn: () => apiClient.getOpenInvitations(token),
  });

export default useOpenInvitations;
