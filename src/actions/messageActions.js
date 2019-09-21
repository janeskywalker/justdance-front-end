import { CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from './actionTypes';
import config from '../config'

const CREATE_MESSAGE_URL = `http://${config.hostName}/api/v1/messages/`
const DELETE_MESSAGE_URL = `http://${config.hostName}/api/v1/messages/`
const UPDATE_MESSAGE_URL = `http://${config.hostName}/api/v1/messages/`

export function createMessage(newMessage) {
    console.log('create: ', newMessage)
    return (dispatch) => {
        fetch(CREATE_MESSAGE_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMessage),
        }).then(async (res) => {
            // const json = await res.json()
            // console.log('res: ', json)
          dispatch({
            type: CREATE_MESSAGE,
            data: {
            // this newMessage is sent back from the server
              newMessage: await res.json()
            }
          })
        })
      }
}

export function deleteMessage(data) {
    console.log('deleteing -- action ')
    return (dispatch) => {
      fetch(`${DELETE_MESSAGE_URL}${data.messageId}`, {
        method: 'DELETE',
      }).then(async (res) => {
        dispatch({
          type: DELETE_MESSAGE,
          // only data info to update state, dont need data back from server
          data,
        })
      })
    }
}

export function updateMessage(newMessage) {
  console.log('update: ', newMessage)
  return (dispatch) => {
      fetch(`${UPDATE_MESSAGE_URL}${newMessage._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      }).then(async (res) => {
          const json = await res.json()
          console.log('res: ', json)
        dispatch({
          type: UPDATE_MESSAGE,
          data: {
          // this newMessage is sent back from the server
            updatedMessage: json
          }
        })
      })
    }
}