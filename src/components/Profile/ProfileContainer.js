import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProfileContainer = ({currentUser}) => {
  if (!currentUser) {
    return (
      <Redirect to="/login" />
    )
  } else {
    return (
      <div>
        <h2 className='section-header'>Welcome Dancer {currentUser.username}</h2>
        <p>Member since {moment(currentUser.signup_date).format("MMMM Do YYYY")}</p>
        { currentUser.avatar ?
            <img className="avatar" src={currentUser.avatar} alt="avatar" /> :
            undefined }
          
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(ProfileContainer);

