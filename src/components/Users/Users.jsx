import React from "react";
import Pagination from "./Pagination/Pagination";
import User from "./User/User";
import classNames from "./Users.module.sass";


const Users = (props) => {


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
        <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      </div>
      {<UsersElements />}
    </div>
  );
};

export default Users;
