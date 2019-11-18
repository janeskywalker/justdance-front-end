
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signup } from '../../actions/userActions'


class SignupForm extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        password2:""
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        console.log(this.state)
      };

    handleSubmit = (evt)=>{
        evt.preventDefault()
        
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.signup(newUser)
    }
     

  render() {

    // redirect to profile upon login 
    if (this.props.currentUser) {
        return (
            <Redirect to="/profile" />
        )
    } else {
        return (

            <section className='login-form-page'>

                <h2 className="form-greeting">Welcome to Signup</h2>

            {/* this handleSubmit is not passed down by parent anymore */}
                <form onSubmit={this.handleSubmit} className='login-form'>

                    <div className="form-group">
                        <label className="label" htmlFor="username">Username</label>
                        <input name="username" id="username" value={this.state.username} onChange={this.handleChange} className="form-input"></input>
                    </div>

                    <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-input" />
                    </div>

                    <div className="form-group">
                    <label className="label" htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-input" />
                    </div>


                    <div className="form-group">
                    <label className="label" htmlFor="email">Confirm password</label>
                    <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-input" />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

            </section>

      )
    }
  }
 
}



function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
 
export default connect(mapStateToProps, { signup })(SignupForm);
  
  
