import React from "react";
import {
  addMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};


export default compose(
  connect(mapStateToProps, {
    addMessage
  }),
  WithAuthRedirect
)(Dialogs)

