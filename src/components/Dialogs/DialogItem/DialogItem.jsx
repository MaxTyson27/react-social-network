import classNames from '../Dialogs.module.sass'
import { NavLink } from "react-router-dom";

const setActiveLink = ({ isActive }) => isActive ? classNames['link--active'] : ''

const DialogItem = (props) => {
    return (
        <li className={classNames.item}>
            <NavLink className={setActiveLink} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem