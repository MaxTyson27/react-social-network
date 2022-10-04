import React from 'react';
import Header from './Header';
import { logoutUser } from '../../redux/auth-reducer.ts'
import { connect } from 'react-redux';



const HeaderContainer = (props) => {



  // useEffect(() => {

  //   props.setAuthUser()

  // }, [])


  return <Header {...props} />
}


// class HeaderContainer extends React.Component {
//   componentDidMount() {
//     this.props.setAuthUser()
//     console.log(this.props.isAuth)
//   }

//   render() {
//     return <Header {...this.props} />
//   }
// }


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);