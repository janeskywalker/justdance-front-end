import { LOG_IN, LOG_OUT } from './actionTypes';


export function login (currentUser) {
  console.log('login action')
  return {
    type: LOG_IN,
    data: {
      currentUser: currentUser
    }
  }
}


export function logout () {
  console.log('logout in action')
  return {
    type: LOG_OUT,
  }
}


