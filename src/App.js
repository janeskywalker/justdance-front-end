import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import NavBar from './components/NavBar';
import { Switch, Route, withRouter } from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer';
import StudioContainer from './components/Studio/StudioContainer';
import Router from './config/routes';
import Home from './Home'



function App({ user }) {
  return (
    <div className="App">

      <NavBar />

      <Router />

    </div>
  );
}

function mapStateToProps(state) {
  console.log('state: ', state)
  return { user: state.currentUser }
}

export default connect(mapStateToProps)(App);
