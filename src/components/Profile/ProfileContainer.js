import React from 'react';
import { connect } from 'react-redux'


const ProfileContainer = ({currentUser}) => {
  if(currentUser) {
    return (
      <div className="App">
        <h2 className='greet-user'>Welcome Dancer {currentUser.name}</h2>
        { currentUser.avatar !== null && currentUser.avatar !== '' ?
            <img className="avatar" src={currentUser.avatar} alt="avatar" /> :
            undefined }
          
      </div>
    );
  }

  return (<div className="App">Please log in</div>)
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser}
}

export default connect(mapStateToProps)(ProfileContainer);

