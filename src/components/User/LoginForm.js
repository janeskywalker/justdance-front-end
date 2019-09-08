
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'


class LoginForm extends Component {

    state = {
        email: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
     

  render() {

        return (

              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-input" placeholder="example@example.com"/>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-input" />
                </div>

                <button type="submit" className="login-btn">Login</button>
              </form>

      )
  }
 
}



function mapStateToProps(state) {
    return { studios: state.studios, currentUser: state.currentUser }
  }
 
export default connect(mapStateToProps, { login })(LoginForm);
  
  
