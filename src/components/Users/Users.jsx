import React from "react";
import User from "./User/User";
import classNames from "./Users.module.sass";


const Users = (props) => {

  const PaginationElements = () => {
    const pagesCount = Math.ceil(
      ((props.totalUsersCount / props.pageSize) / 100) - 35
    );

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return pages.map((page, index) => {
      return (
        <span onClick={() => props.onPageChanged(page)} key={index}
          className={props.currentPage === page ? classNames["page--active"] : ""}>
          {page}
        </span>
      );
    })
  }

  const UsersElements = () =>
    props.users.map((user, i) => (
      <User
        key={i}
        name={user.name}
        status={user.status}
        avatar={user.photos}
        followed={user.followed}
        userId={user.id}
        followingProgress={props.followingProgress}
        unfollowUser={props.unfollowUser}
        followUser={props.followUser}
      />
    ));
  return (
    <div>
      <div className={classNames.pages}>
        {<PaginationElements />}
      </div>
      {<UsersElements />}
    </div>
  );
};

export default Users;
