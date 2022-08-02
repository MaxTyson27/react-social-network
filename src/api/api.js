import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ca58446d-0e71-4e52-a546-929f439f2dbc'
  }

})

export const usersAPI = {
  getUsers(currentPage, pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => {
      return responce.data
    })
  },
  followUser(userId){
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},).then(responce => {
      return responce.data
    })
  },
  unfollowUser(userId){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(responce => {
      return responce.data
    })
  },
  isAuth(){
    return instance.get(`auth/me`).then(responce => {
      return responce.data
    })
  },
  getUserProfile(userId){
    return instance.get(`profile/${userId}`).then(responce => {
      return responce.data
    })
  }
}