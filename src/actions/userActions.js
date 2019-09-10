import { SIGN_UP, LOG_IN, LOG_OUT } from './actionTypes';

const LOGIN_URL = 'http://localhost:4000/api/v1/auth/login'
const LOGOUT_URL = 'http://localhost:4000/api/v1/auth/logout'
const SIGN_UP_URL = 'http://localhost:4000/api/v1/auth/register'


export function signup (newUser) {
  console.log('signup action')
  // Send login request to server.
  // If response successful, set current user

  return (dispatch) => {
    fetch(SIGN_UP_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then(async (res) => {
      dispatch({
        type: SIGN_UP,
        data: {
          newUser: await res.json()
        }
      })
    })
  }
}


export function login (currentUser) {
  console.log('login action')
  // Send login request to server.
  // If response successful, set current user

  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    }).then(async (res) => {
      dispatch({
        type: LOG_IN,
        data: {
          currentUser: await res.json()
        }
      })
    })
  }
}


export function logout () {
  console.log('logout in action')
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
    }).then(async (res) => {
      dispatch({
        type: LOG_OUT,
      })
    })
  }
}


