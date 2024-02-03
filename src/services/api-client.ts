import { IFormData } from "../components/Layouts/SignInUpLayout";
import axiosInstance, { authenticateInstance } from "./axios-instance";

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getChats = (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => response.data);
  };

  getMessages = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { username },
    };
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => response.data);
  };

  logInRequest = (user: IFormData) => {
    console.log("user: ", user);
    return axiosInstance.post(this.endpoint, user).then((response) => {
      const { token } = response.data;
      console.log("token ", token);
      authenticateInstance(token);
      return response.data;
    });
  };

  signupRequest = (user: IFormData) => {
    console.log("user: ", user);
    return axiosInstance.post(this.endpoint, user).then((response) => {
      const { token } = response.data;
      console.log("token ", token);
      authenticateInstance(token);
      return response.data;
    });
  };

  getUserInfo = (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error ", error.response.status);
        return { error: error.response.status };
      });
  };

  getFriends = (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => response.data);
  };

  getAddFriendSearch = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { username }, config)
      .then((response) => response.data);
  };

  getSearchMyFriends = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .get(this.endpoint + username, config)
      .then((response) => response.data);
  };

  postSendFriendInvitation = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { receiver_username: username }, config)
      .then((response) => response.data);
  };

  getOpenInvitations = (token: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .get(this.endpoint, config)
      .then((response) => response.data);
  };

  postSendMessage = (token: string, toUsername: string, message: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { to: toUsername, content: message }, config)
      .then((response) => response.data);
  };

  postAcceptInvitation = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { username }, config)
      .then((response) => response.data);
  };

  postCancelInvitation = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { username }, config)
      .then((response) => response.data);
  };

  postRejectInvitation = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axiosInstance
      .post(this.endpoint, { username }, config)
      .then((response) => response.data);
  };

  deleteFriend = (token: string, username: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    console.log("endpoint:", this.endpoint + username);
    return axiosInstance
      .delete(this.endpoint + username, config)
      .then((response) => response.data);
  };
}

export default APIClient;
