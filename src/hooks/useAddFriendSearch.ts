import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/user/search");

const useAddFriendSearch = (token: string, username: string) =>
  useQuery({
    queryKey: ["add friend search", token, username],
    queryFn: () => apiClient.getAddFriendSearch(token, username),
  });

export default useAddFriendSearch;
