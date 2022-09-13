import { createSelector } from "reselect";

export const usersSelectors = {
  getUsers(state) {
    return state.usersPage.users;
  },
  getPageSize(state) {
    return state.usersPage.pageSize;
  },
  getTotalUsersCount(state) {
    return state.usersPage.totalUsersCount;
  },
  getCurrentPage(state) {
    return state.usersPage.currentPage;
  },
  getIsFetchingStatus(state) {
    return state.usersPage.isFetching;
  },
  getFollowingProgress(state) {
    return state.usersPage.followingProgress;
  },
  getIsAuthStatus(state) {
    return state.auth.isAuth;
  },
};

export const getUsersSelector = createSelector(
  usersSelectors.getUsers,
  (users) => {
    return users.filter((u) => true);
  }
);
