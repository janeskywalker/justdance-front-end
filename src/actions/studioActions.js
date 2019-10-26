import { UPDATE_STUDIOS, UPDATE_STUDIO_MESSAGES, UPDATE_NEW_MESSAGES } from './actionTypes';
import config from '../config'

const GET_STUDIOS_URL = `${config.hostName}/api/v1/studios`
const GET_STUDIO_URL = `${config.hostName}/api/v1/studios/`
const GET_STUDIO_MESSAGES_URL = `${config.hostName}/api/v1/messages/studio/`



export function getStudios() {
    console.log('getting studios')

    return (dispatch) => {
        fetch(GET_STUDIOS_URL).then(async (res) => {
          dispatch({
            type: UPDATE_STUDIOS,
            data: {
              areStudiosLoaded: true,
              studios: await res.json()
            }
          })
        })
      }
}

export function getStudio(id) {
  console.log(id)
  return (dispatch) => {
      // two api calls:
      // get that one studio
      fetch(`${GET_STUDIO_URL}${id}`)
        .then(async (res) => {
          dispatch({
            type: UPDATE_STUDIOS,
            data: {
              studios: [ await res.json() ]
            }
          })

          // get all messages of that studio
          fetch(`${GET_STUDIO_MESSAGES_URL}${id}`)
            .then(async (res) => {
              const json = await res.json()
              console.log('messages: ', json)
              dispatch({
                type: UPDATE_STUDIO_MESSAGES,
                data: {
                  studioId: id,
                  messages: json
                }
              })
            })
        })
  }
}

// there are times when only need to get studio messages but not the studio? 
export function getStudioMessages(id) {
  return (dispatch) => {
    fetch(`${GET_STUDIO_MESSAGES_URL}${id}`)
      .then(async (res) => {
        const json = await res.json()
        console.log('messages: ', json)
        dispatch({
          type: UPDATE_STUDIO_MESSAGES,
          data: {
            studioId: id,
            messages: json
          }
        })
      })
  }
}

// get new messages of a given studio 
export function getNewMessages(id, timeStamp) {
  return (dispatch) => {
    fetch(`${GET_STUDIO_MESSAGES_URL}${id}/${timeStamp}`)
      .then(async (res) => {
        const json = await res.json()
        console.log('new messages: ', json)
        dispatch({
          type: UPDATE_NEW_MESSAGES,
          data: {
            studioId: id,
            messages: json
          }
        })
    })
  }
}