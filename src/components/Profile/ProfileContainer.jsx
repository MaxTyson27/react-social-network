import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile, getUserStatus, updateUserStatus, savePhoto, updateProfile } from '../../redux/profile-reducer'
import { setAuthUser } from '../../redux/auth-reducer'
import { useEffect } from 'react';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/WithRouter';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = (props) => {

  const navigate = useNavigate();

  useEffect(() => {

    if (!props.isAuth) {

      navigate(`/login`)

    }
    let userId;
    if (!props.match) {

      userId = props.userId
    } else {
      userId = props.match.params.userId
    }

    if (userId) {
      props.setProfile(userId)
      props.getUserStatus(userId)
    } else {
      navigate(`/login`)
    }

  }, [props.match, props.userId])



  return (
    <Profile {...props} userId={props.userId} isOwner={!props.match} />
  );
};



const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  userId: state.auth.userId,
  editMideProfile: state.profilePage.editMideProfile
})



export default compose(
  connect(mapStateToProps, {
    setProfile,
    getUserStatus,
    updateUserStatus,
    setAuthUser,
    savePhoto,
    updateProfile
  }),
  withRouter,
  // WithAuthRedirect,
)(ProfileContainer)