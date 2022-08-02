import React from 'react';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'
import { connect } from 'react-redux';
import * as axios from "axios";
import { useEffect } from 'react';
import { usersAPI } from '../../api/api';


const HeaderContainer = (props) => {

  useEffect(() => {
    usersAPI.isAuth().then((data) => {
      if (data.resultCode === 0) {
        const { id: userId, login, email } = data.data
        props.setAuthUserData(userId, email, login)
      }
    });
  })


  return <Header {...props} />
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);