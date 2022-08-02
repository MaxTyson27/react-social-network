import classNames from '../Dialogs.module.sass'



const Message = (props) => {
  const classGeneration = () => {
    let messageClass = ''
    if(props.isMineClass === 'message--myself'){
      messageClass = `${classNames.message} ${classNames['message--myself']}`
    } else {
      messageClass = `${classNames.message}`
    }
  
    return messageClass
  }
  
  return (
    <li className={classGeneration()} >
      <p className={classNames.message__text}>{props.message}</p>
    </li>
  )
}


export default Message


