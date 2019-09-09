
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'


class LoginForm extends Component {

    state = {
        email: "",
        password: "",
        error: null
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        console.log(this.state)
      };

    handleSubmit = (evt)=>{
        evt.preventDefault()
        
        const currentUser = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(currentUser)
    }
     

  render() {

        return (

            <section className='login-form-page'>

                <h2 className="form-greeting">Welcome to Login</h2>

            {/* this handleSubmit is not passed down by parent anymore */}
                <form onSubmit={this.handleSubmit} className='login-form'>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-input" />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-input" />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

            </section>

      )
  }
 
}



function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
 
export default connect(mapStateToProps, { login })(LoginForm);
  
  
