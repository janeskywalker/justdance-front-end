import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import NavBar from './components/NavBar';

function App({ user }) {
  return (
    <div className="App">

      <NavBar />

      <header className="App-header">
        <h1>Just Dance</h1>
        <p>An app for dancers</p>
        {/* <h2>Hello {user.name}</h2> */}
      </header>


      
    </div>
  );
}

function mapStateToProps(state) {
  console.log('state: ', state)
  return { user: state.currentUser }
}

export default connect(mapStateToProps)(App);
