import React from "react";
import { connect } from "react-redux";
import { getUsers, getUsersPages, followUser, unfollowUser } from "../../redux/users-reducer";
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
    isAuth: state.auth.isAuth
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

