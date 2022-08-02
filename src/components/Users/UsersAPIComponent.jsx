import React from "react";
import Users from "./Users";
import classNames from "./Users.module.sass";
import Preloader from "./Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  render() {
    return (
      <div className={classNames.wrapper}>
        {this.props.isFetching ? <Preloader /> : null}
        <Users onPageChanged={this.onPageChanged} {...this.props} />
      </div>
    )
  }
}

export default UsersAPIComponent;
