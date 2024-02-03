import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/friendship/friends/delete/");

const useDeleteFriend = (token: string) => {
  return useMutation((username: string) =>
    apiClient.deleteFriend(token, username)
  );
};

export default useDeleteFriend;
