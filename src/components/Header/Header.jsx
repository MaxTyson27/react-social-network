import { NavLink } from 'react-router-dom';
import companyLogo from '../../images/logo.png';
import classNames from './Header.module.sass'

const Header = (props) => {

  return (
    <header className={classNames.header}>
      <img src={companyLogo} alt="" />
      <div className={classNames.loginBlock}>
        {props.isAuth ? <p>{props.login}</p> : <NavLink to={'/login'}>Login</NavLink>}
        {props.isAuth ? <button onClick={props.logoutUser}>Logout</button> : ''}
      </div>
    </header>

  )
}

export default Header
