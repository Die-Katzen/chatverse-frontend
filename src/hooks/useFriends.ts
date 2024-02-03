import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/friendship/friends/all");

const useFriends = (token: string) =>
  useQuery({
    queryKey: ["friends", token],
    queryFn: () => apiClient.getFriends(token),
  });

export default useFriends;
