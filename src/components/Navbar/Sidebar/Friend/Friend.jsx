import classNames from './Friend.module.sass'

const Friend = (props) => {
  return (
    <li className={classNames.item}>
      <img src={props.avatar} alt={`${props.name} avatar`} className={classNames.avatar} />
      <p className={classNames.name}>{props.name}</p>
    </li>
  )
}


export default Friend