import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Person = (props) => {

  return <ProfileInfo editMideProfile={props.editMideProfile} updateProfile={props.updateProfile} userId={props.userId} status={props.status} isOwner={props.isOwner} updateUserStatus={props.updateUserStatus} profile={props.profile} />;

};

export default Person;
