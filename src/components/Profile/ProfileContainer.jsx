import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer'
import { setAuthUser } from '../../redux/auth-reducer'
import { useEffect } from 'react';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/WithRouter';
import { useNavigate } from 'react-router-dom';

// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//       .then((responce) => {
//         this.props.setUserProfile(responce.data);
//       });
//   }


//   render() {
//     return (
//       <Profile {...this.props} profile={this.props.profile} />
//     );
//   }
// };


// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile
// })

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {
//   setUserProfile,
// })(WithUrlDataContainerComponent);



const ProfileContainer = (props) => {

  const navigate = useNavigate();

  useEffect(() => {

    if (!props.isAuth) {

      navigate(`/login`)

    }
    let userId;
    if (!props.match) {
      // userId = 25119
      userId = props.userId
    } else {
      userId = props.match.params.userId
    }

    if (userId) {
      props.setProfile(userId)
      props.getUserStatus(userId)
    }

  }, [props.match, props.userId])





  return (
    <Profile {...props} />
  );
};



const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  userId: state.auth.userId
})



export default compose(
  connect(mapStateToProps, {
    setProfile,
    getUserStatus,
    updateUserStatus,
    setAuthUser
  }),
  withRouter,
  // WithAuthRedirect,
)(ProfileContainer)