import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ProfileContainer = ({currentUser}) => {
  if (!currentUser) {
    return (
      <Redirect to="/login" />
    )
  } else {
    return (
      <div className="App">
        <h2 className='greet-user'>Welcome Dancer {currentUser.username}</h2>
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

