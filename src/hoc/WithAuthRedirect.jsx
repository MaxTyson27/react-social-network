import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/auth-reducer'

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth
})


export const WithAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {


    if (!props.isAuth) {
      return <Navigate to='/login' />
    }

    return <Component {...props} />


  }

  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect, { setAuthUser })(RedirectComponent)

  return ConnectAuthRedirectComponent

}

export default WithAuthRedirect

