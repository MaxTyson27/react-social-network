import React from "react";
import { connect } from "react-redux";
import { getUsers, getUsersPages, followUser, unfollowUser } from "../../redux/users-reducer";
import { usersSelectors, getUsersSelector } from '../../redux/users-selectors'
import classNames from "./Users.module.sass";
import Users from "./Users";
import Preloader from "./Preloader/Preloader";
import { useEffect } from "react";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onPageChanged = (page) => {
    props.getUsersPages(page, props.pageSize)
  }


  return (
    <div className={classNames.wrapper}>
      {props.isFetching ? <Preloader /> : null}
      <Users onPageChanged={onPageChanged} {...props} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: usersSelectors.getPageSize(state),
    totalUsersCount: usersSelectors.getTotalUsersCount(state),
    currentPage: usersSelectors.getCurrentPage(state),
    isFetching: usersSelectors.getIsFetchingStatus(state),
    followingProgress: usersSelectors.getFollowingProgress(state),
    isAuth: usersSelectors.getIsAuthStatus(state)
  };
};



// const mapDispatchToProps = (dispatch) => {
//   return {
//     togglerFollow: (userId) => dispatch(toggleFollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setNumberPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
//     setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching)),
//   };
// };


export default compose(
  connect(mapStateToProps, {
    followUser,
    getUsersPages,
    getUsers,
    unfollowUser,
  }),
  WithAuthRedirect
)(UsersContainer)

