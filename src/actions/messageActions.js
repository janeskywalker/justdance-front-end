import { CREATE_MESSAGE, DELETE_MESSAGE } from './actionTypes';
import uuid from 'uuid'

const CREATE_MESSAGE_URL = 'http://localhost:4000/api/v1/messages/'
const DELETE_MESSAGE_URL = 'http://localhost:4000/api/v1/messages/'

export function createMessage(newMessage) {
    console.log('create: ', newMessage)
    // return {
    //     type: CREATE_MESSAGE,
    //     newMessage: Object.assign({}, newMessage, {id: uuid()})
    //}
    return (dispatch) => {
        fetch(CREATE_MESSAGE_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMessage),
        }).then(async (res) => {
            const json = await res.json()
            console.log('res: ', json)
          dispatch({
            type: CREATE_MESSAGE,
            data: {
              newMessage: await json
            }
          })
        })
      }
}

export function deleteMessage(data) {
    console.log('deleteing -- action ')
    // return {
    //     type: DELETE_MESSAGE,
    //     data: data
    // }

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