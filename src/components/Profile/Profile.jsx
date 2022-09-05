import { useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Person from "./Person/Person";
import classNames from "./Profile.module.sass";

const Profile = (props) => {


  return (
    <div>
      <div className={classNames.bg}>
        <img
          src="https://kartinkin.net/uploads/posts/2021-07/1625616661_5-kartinkin-com-p-arti-naruto-konokha-art-krasivo-5.jpg"
          alt=""
        />
      </div>
      <Person status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
