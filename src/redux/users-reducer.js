import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let defaultState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const getUsersPages = (page, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(toggleIsFetching(true));

  usersAPI.getUsers(page, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const unfollowUser = (userId) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersAPI.unfollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  });
};

export const followUser = (userId) => (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  usersAPI.followUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
  });
};

export default usersReducer;
