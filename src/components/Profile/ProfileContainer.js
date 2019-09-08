import React from 'react';
import { connect } from 'react-redux'


const ProfileContainer = ({currentUser}) => {
  if(currentUser) {
    return (
      <div className="App">
        <h2>Welcome Dancer {currentUser.name}</h2>
        <img className="avatar" src={currentUser.avatar} alt="avatar" />
      </div>
    );
  }

  return (<div>Please log in</div>)
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(ProfileContainer);

