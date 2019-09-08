import { SIGN_UP, LOG_IN, LOG_OUT } from './actionTypes';



export function login () {
  console.log('login action')
  // return {
  //   type: SIGN_UP,
  //   data: {
  //     id: uuid(),
  //     completed: false,
  //     task,
  //   }
  // }
}


export function logout () {
  console.log('logout in action')
  return {
    type: LOG_OUT,
  }
}


