import classNames from './Post.module.sass'

const Post = (props) => {


  return (
    <div className={classNames.item}>
      <img src='https://i.pinimg.com/originals/77/b7/a7/77b7a77a99a2edfca3ef6defccc94241.jpg' alt="" />
      <p className={classNames.item__text}>
        {props.message}
      </p>
      <div className={classNames.mark}>
        <span className={classNames.like}>Like</span>
        <span className={classNames.num}>{props.numLikes}</span>
      </div>
    </div>

  )
}

export default Post