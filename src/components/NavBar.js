import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {ProfileContainer} from './Profile/ProfileContainer'
import { logout } from '../actions/userActions'


const NavBar = ({currentUser, logout}) => {

    // if logged in, show homepage link, link to profile and logout button 
    if(currentUser) {
        return (
            <nav>
                <Link to="/" className="brand-link">
                    <h1 className="brand-header">Just Dance</h1>
                </Link>

                <Link to="/profile" className="nav-btn" >
                    Profile
                </Link>

                <Link to="/studios" className="nav-btn" >
                    Studios
                </Link>

                {/* logout button -> set currentUser to null, redirect to Home page*/}
                <button 
                className="nav-btn" 
                style={{cursor: 'pointer'}} 
                onClick={()=>{
                    console.log('clicked logout')
                    logout()
                    }}>Logout</button>

            </nav>
        )

    } else {
        // if not logged in, show hompage link, signup and login button
        return (
            <nav>
                <Link to="/" className="brand-link">
                    <h1 className="brand-header">justDance</h1>
                </Link>

                <button 
                className="nav-btn" 
                style={{cursor: 'pointer'}} 
                onClick={()=>{console.log('clicked signup')}}>Signup</button>


                <Link to="/loginform" className="brand-link">
                    <p className="navbar-link">Login</p>
                </Link>

            </nav>
        )
    }
}



function mapStateToProps(state) {
    console.log('state: ', state)
    return { currentUser: state.currentUser }
  }
  
export default connect(mapStateToProps, { logout })(NavBar);
