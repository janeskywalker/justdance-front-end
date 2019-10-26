import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {ProfileContainer} from './Profile/ProfileContainer'
import { logout } from '../actions/userActions'


const NavBar = ({currentUser, logout}) => {

    // if logged in, show homepage link, link to profile and logout button 
    if(currentUser) {
        return (
            <nav className='nav-bar'>
                
                <Link to="/" className="brand-link"><h1 className="brand-header">Just Dance</h1></Link>

                <ul className="nav-list">
                    <li className="nav-list-item"><Link to="/profile" className="nav-link" >Profile</Link></li>
                    <li className="nav-list-item"><Link to="/studios" className="nav-link" >Studios</Link></li>
                
                    {/* logout button -> set currentUser to null, redirect to Home page*/}
                    <button className="nav-list-item nav-btn" 
                        onClick={()=>{
                            console.log('clicked logout')
                            logout()
                        }}>Logout</button>

                </ul>
            </nav>
        )
    } else {
        // if not logged in, show hompage link, signup and login button
        return (
            <nav className='nav-bar'>

                <Link to="/" className="brand-link"><h1 className="brand-header">Just Dance</h1></Link>

                <ul className="nav-list">
                    <li className="nav-list-item"><Link to="/signup" className="brand-link">Signup</Link></li>
                    <li className="nav-list-item"><Link to="/login" className="brand-link">Login</Link></li>
                    <li className="nav-list-item"><Link to="/studios" className="nav-link" >Studios</Link></li>
                </ul>
            </nav>
        )
    }
}



function mapStateToProps(state) {
    console.log('state: ', state)
    return { currentUser: state.currentUser }
  }
  
export default connect(mapStateToProps, { logout })(NavBar);
