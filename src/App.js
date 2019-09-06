import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App({ user }) {
  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Just Dance
        </h1>


        <h2>Hello {user.name}</h2>

      </header>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('state: ', state)
  return { user: state.currentUser }
}

export default connect(mapStateToProps)(App);
