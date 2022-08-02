import Friend from "./Friend/Friend";
import classNames from "./Sidebar.module.sass";

const Sidebar = (props) => {
  const friendsElements = props.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} avatar={friend.avatar} />
  ));

  return (
    <div className={classNames.inner}>
      <h2 className={classNames.title}>Friends</h2>
      <ul className={classNames.list}>{friendsElements}</ul>
    </div>
  );
};

export default Sidebar;
