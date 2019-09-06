import React from 'react';
import { connect } from 'react-redux'


const Home = () => {
   
  return (
    <header className="App-header">
        <h1>Home</h1>
        <p>An app for dancers</p>
    </header> 
  );
}

// function mapStateToProps(state) {
//   console.log('state: ', state)
//   return { state: state}
// }

// export default connect(mapStateToProps)(ProfileContainer);
export default Home
