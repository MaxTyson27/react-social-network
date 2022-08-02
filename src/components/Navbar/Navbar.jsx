import { NavLink } from "react-router-dom";
import classNames from "./Navbar.module.sass";
import SidebarContainer from "./Sidebar/SidebarContainer";
const setLinkActive = ({ isActive }) =>
  isActive ? classNames["link--active"] : "";

const Navbar = () => {
  return (
    <div className={classNames.inner}>
      <nav className={classNames.nav}>
        <div className={classNames.item}>
          <NavLink to="/" className={setLinkActive}>
            Profile
          </NavLink>
        </div>
        <div className={classNames.item}>
          <NavLink to="/dialogs" className={setLinkActive}>
            Messages
          </NavLink>
        </div>
        <div className={classNames.item}>
          <NavLink to="/users" className={setLinkActive}>
            Users
          </NavLink>
        </div>
        <div className={classNames.item}>
          <NavLink to="/news" className={setLinkActive}>
            News
          </NavLink>
        </div>
        <div className={classNames.item}>
          <NavLink to="/music" className={setLinkActive}>
            Music
          </NavLink>
        </div>
        <div className={classNames.item}>
          <NavLink to="/settings" className={setLinkActive}>
            Settings
          </NavLink>
        </div>
      </nav>
      <SidebarContainer />
    </div>
  );
};

export default Navbar;
