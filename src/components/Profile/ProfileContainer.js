import React from 'react';
import { connect } from 'react-redux'


function ProfileContainer({ state }) {
  return (
    <div className="App">
      <h2>I am ProfileContainer</h2>
    </div>
  );
}

// function mapStateToProps(state) {
//   console.log('state: ', state)
//   return { state: state}
// }

// export default connect(mapStateToProps)(ProfileContainer);
export default ProfileContainer
