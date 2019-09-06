import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {ProfileContainer} from './Profile/ProfileContainer'

const NavBar = ({user}) => {

    // if logged in, show homepage link, link to profile and logout button 
    if(user) {
        return (
            <nav>
                <Link to="/" className="brand-link">
                    <h1 className="brand-header">justDance</h1>
                </Link>

                <Link className="nav-btn" to="/profile">
                    Profile
                </Link>

                <button 
                className="nav-btn" 
                style={{cursor: 'pointer'}} 
                onClick={()=>{console.log('clicked logout')}}>Logout</button>

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

                <button 
                className="nav-btn" 
                style={{cursor: 'pointer'}} 
                onClick={()=>{console.log('clicked signup')}}>Login</button>

            </nav>
        )
        


    }




}



function mapStateToProps(state) {
    console.log('state: ', state)
    return { user: state.currentUser }
  }
  
export default connect(mapStateToProps)(NavBar);
