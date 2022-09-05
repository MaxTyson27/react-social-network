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
  isAuth: state.auth.isAuth
})

export default connect(mapPropsToState, {
  loginUser,
})(LoginContainer)
