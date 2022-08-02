import React from "react";
import {
  updateNewMessage,
  addMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default connect(mapStateToProps, {
  updateNewMessage,
  addMessage
})(Dialogs);

