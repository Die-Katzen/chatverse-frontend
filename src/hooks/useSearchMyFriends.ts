import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/friendship/friends/search/");

const useSearchMyFriends = (
  token: string,
  username: string,
  toggleSearch: boolean
) =>
  useQuery({
    queryKey: ["search my friends", token, username],
    queryFn: () => apiClient.getSearchMyFriends(token, username),
    enabled: toggleSearch,
  });

export default useSearchMyFriends;
