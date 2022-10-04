import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { loginUser } from '../../redux/auth-reducer'


const LoginContainer = (props) => {

  // let navigate = useNavigate()

  // console.log(props.isAuth);

  // if (props.isAuth) {
  //   navigate('/')
  // }

  return <Login {...props} />
}

const mapPropsToState = (state) => ({
  isAuth: state.auth.isAuth,
  isLogin: state.auth.validateLogin,
  errorMessage: state.auth.errorMessage,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapPropsToState, {
  loginUser,
})(LoginContainer)
