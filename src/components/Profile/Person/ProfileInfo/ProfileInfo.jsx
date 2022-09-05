import React from "react";
import Preloader from "../../../Users/Preloader/Preloader";
import classNames from "./ProfileInfo.module.sass";
import tobiramaImage from '../../../../assets/images/user.jpeg'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classNames.person}>
      <img src={props.profile.photos.large === null ? tobiramaImage : props.profile.photos.large} alt="avatar" />
      <div className={classNames.person__desc}>
        <p className={classNames.person__name}>{props.profile.fullName}</p>
        <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
        <p className={classNames.about}>{props.profile.aboutMe}</p>
        <ul className={classNames.person__list}>
          <li>Contacts:</li>
          <li>Facebook: {props.profile.contacts.facebook === null ? 'No' : props.profile.contacts.facebook}</li>
          <li>Website: {props.profile.contacts.website === null ? 'No' : props.profile.contacts.website}</li>
          <li>Twitter: {props.profile.contacts.twitter === null ? 'No' : props.profile.contacts.twitter}</li>
          <li>VK: {props.profile.contacts.vk === null ? 'No' : props.profile.contacts.vk}</li>
          <li>Instagram: {props.profile.contacts.instagram === null ? 'No' : props.profile.contacts.instagram}</li>
          <li>YouTube: {props.profile.contacts.youtube === null ? 'No' : props.profile.contacts.youtube}</li>
          <li>GitHub: {props.profile.contacts.github === null ? 'No' : props.profile.contacts.github}</li>
          <li>Main link: {props.profile.contacts.mainLink === null ? 'No' : props.profile.contacts.mainLink}</li>
          <li>Статус работы: {props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</li>
          <li>Описание работы: {props.profile.lookingForAJobDescription === null ? 'Ищу работу' : props.profile.lookingForAJobDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
