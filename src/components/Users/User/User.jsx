import React from "react";
import classNames from "../Users.module.sass";
import userImage from '../../../assets/images/user.jpeg'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = (props) => {
  return (
    <div className={classNames.inner}>
      <div className={classNames.body}>
        <NavLink to={'/profile/' + props.userId}>
          <img
            src={
              props.avatar.small !== null
                ? props.avatar.small
                : userImage
            }
            alt="user avatar"
            className={classNames.image}
          />
        </NavLink>
        {props.followed ?
          <button disabled={props.followingProgress.some(id => id === props.userId)}
            onClick={() => { props.unfollowUser(props.userId) }}
            className={classNames.follow_btn}
          >
            UNFOLLOW
          </button>
          :
          <button disabled={props.followingProgress.some(id => id === props.userId)}
            onClick={() => { props.followUser(props.userId) }}
            className={classNames.follow_btn}
          >
            FOLLOW
          </button>
        }
      </div>
      <div className={classNames.content}>
        <div className={classNames.box}>
          <p className={classNames.name}>{props.name}</p>
          <p className={classNames.status}>{props.status}</p>
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
