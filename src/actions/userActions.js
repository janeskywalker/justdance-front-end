import { LOG_IN, LOG_OUT } from './actionTypes';

const LOGIN_URL = 'http://localhost:4000/api/v1/auth/login'

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
  return {
    type: LOG_OUT,
  }
}


