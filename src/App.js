import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import NavBar from './components/NavBar';
import { Switch, Route, withRouter } from 'react-router-dom'
import Router from './config/routes';




function App({ user }) {
  return (
    <div className="App">

      <NavBar />

      <main className="main-content">
        <Router />
      </main>

      <footer className="page-footer" >&copy;2019  Jane Zeng </footer> 

    </div>
  );
}

function mapStateToProps(state) {
  return { user: state.currentUser }
}

export default connect(mapStateToProps)(App);
