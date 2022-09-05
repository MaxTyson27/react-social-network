import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Person = (props) => {

  return <ProfileInfo status={props.status} updateUserStatus={props.updateUserStatus} profile={props.profile} />;

};

export default Person;
