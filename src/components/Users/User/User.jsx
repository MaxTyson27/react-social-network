import React from "react";
import classNames from "../Users.module.sass";
import userImage from '../../../assets/images/user.jpeg'
import { NavLink } from "react-router-dom";


const User = ({ userId, avatar, followed, unfollowUser, followingProgress, name, status, followUser }) => {
  return (
    <div className={classNames.inner}>
      <div className={classNames.body}>
        <NavLink to={'/profile/' + userId}>
          <img
            src={
              avatar.small !== null
                ? avatar.small
                : userImage
            }
            alt="user avatar"
            className={classNames.image}
          />
        </NavLink>
        {followed ?
          <button disabled={followingProgress.some(id => id === userId)}
            onClick={() => { unfollowUser(userId) }}
            className={classNames.follow_btn}
          >
            UNFOLLOW
          </button>
          :
          <button disabled={followingProgress.some(id => id === userId)}
            onClick={() => { followUser(userId) }}
            className={classNames.follow_btn}
          >
            FOLLOW
          </button>
        }
      </div>
      <div className={classNames.content}>
        <div className={classNames.box}>
          <p className={classNames.name}>{name}</p>
          <p className={classNames.status}>{status}</p>
        </div>
        <div className={classNames.location}>
          <p className={classNames.location_text}>
            {"props.city"}, {"props.country"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
