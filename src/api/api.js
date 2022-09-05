import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ca58446d-0e71-4e52-a546-929f439f2dbc",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`, {}).then((responce) => {
      return responce.data;
    });
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  getUserProfile(userId) {
    console.warn("Obs method, use profileAPI obj");
    return profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then((responce) => {
      return responce.data;
    });
  },
};

export const authAPI = {
  isAuth() {
    return instance.get(`auth/me`).then((responce) => {
      return responce.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((responce) => {
        return responce.data;
      });
  },
  logout() {
    return instance.delete("auth/login").then((responce) => {
      return responce.data;
    });
  },
};
