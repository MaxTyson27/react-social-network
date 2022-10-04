import { useEffect } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Person from "./Person/Person";
import classNames from "./Profile.module.sass";

const Profile = (props) => {

  const onAddPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={classNames.bg}>
        <img
          src="https://kartinkin.net/uploads/posts/2021-07/1625616661_5-kartinkin-com-p-arti-naruto-konokha-art-krasivo-5.jpg"
          alt=""
        />
      </div>
      <Person editMideProfile={props.editMideProfile} userId={props.userId} updateProfile={props.updateProfile} status={props.status} isOwner={props.isOwner} updateUserStatus={props.updateUserStatus} profile={props.profile} />
      {props.isOwner && <input type='file' onChange={onAddPhoto} />}
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
