import React from "react";
import classNames from "./Dialogs.module.sass";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useEffect, useRef } from "react";
import { useForm } from 'react-hook-form'


const DialogsFormMessage = (props) => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all'
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    props.addMessage(data.message)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames.form}>
      <input
        {...register('message', {
          required: true,
          minLength: {
            value: 1,
          }
        })}
        type="text"
        placeholder="Введите сообщение"
        className={classNames.input}
      />
      <button className={classNames.btn} type='submit' disabled={!isValid}>
        Send
      </button>
    </form>
  )

}

const Dialogs = (props) => {
  // const inputRef = React.createRef();
  // const messagesRef = useRef(null);

  // useEffect(() => {
  //   const childrens = Array.from(messagesRef.current.children);
  //   const lastChild = childrens.length - 1;
  //   childrens[lastChild].scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //   });
  // });

  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  // const messagesElements = props.messages.map((m) => {
  //   if (m.isMine !== undefined) {
  //     return (
  //       <Message key={m.id} isMineClass="message--myself" message={m.message} />
  //     );
  //   } else {
  //     return <Message key={m.id} message={m.message} />;
  //   }
  // });

  const messagesElements = props.messages.map((m) => {
    return <Message key={m.id} message={m.message} />;
  });



  // if (!props.isAuth) {
  //   return <Navigate to='/login' />
  // }

  return (
    <div className={classNames.inner}>
      <ul className={classNames.items}>{dialogsElements}</ul>
      <div className={classNames.messages}>
        <ul className={classNames.messagesList}>
          {messagesElements}
        </ul>
        <DialogsFormMessage addMessage={props.addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
