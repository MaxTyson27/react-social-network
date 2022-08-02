import React from "react";
import classNames from "./Dialogs.module.sass";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useEffect, useRef } from "react";

const Dialogs = (props) => {
  const inputRef = React.createRef();
  const messagesRef = useRef(null);

  useEffect(() => {
    const childrens = Array.from(messagesRef.current.children);
    const lastChild = childrens.length - 1;
    childrens[lastChild].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  const dialogsElements = props.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElements = props.messages.map((m) => {
    if (m.isMine !== undefined) {
      return (
        <Message key={m.id} isMineClass="message--myself" message={m.message} />
      );
    } else {
      return <Message key={m.id} message={m.message} />;
    }
  });

  const addNewMessage = () => {
    const inputValue = inputRef.current.value;
    if (inputValue !== "") {
      props.addMessage();
    }
  };

  const onChangeMessage = (e) => props.updateNewMessage(e.target.value);

  const preventDefaultForm = (e) => e.preventDefault();

  return (
    <div className={classNames.inner}>
      <ul className={classNames.items}>{dialogsElements}</ul>
      <div className={classNames.messages}>
        <ul className={classNames.messagesList} ref={messagesRef}>
          {messagesElements}
        </ul>
        <form onSubmit={preventDefaultForm} className={classNames.form}>
          <input
            onChange={onChangeMessage}
            value={props.newMessageText}
            ref={inputRef}
            type="text"
            className={classNames.input}
          />
          <button className={classNames.btn} onClick={addNewMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
