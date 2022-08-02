import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profile-reducer'
import { useEffect } from 'react';
import { useMatch } from "react-router";
import { usersAPI } from '../../api/api';

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
  const match = useMatch('/profile/:userId');

  useEffect(() => {
    let userId;
    if (!match) {
      userId = 2
    } else {
      userId = match.params.userId
    }

    props.setProfile(userId)
  }, [match])


  return (
    <Profile {...props} profile={props.profile} />
  );
};


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setProfile,
})(ProfileContainer);