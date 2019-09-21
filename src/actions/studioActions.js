import { UPDATE_STUDIOS, UPDATE_STUDIO_MESSAGES } from './actionTypes';
import config from '../config'

const GET_STUDIOS_URL = `http://${config.hostName}/api/v1/studios`
const GET_STUDIO_URL = `http://${config.hostName}/api/v1/studios/`
const GET_STUDIO_MESSAGES_URL = `http://${config.hostName}/api/v1/messages/studio/`

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
      fetch(`${GET_STUDIO_URL}${id}`)
        .then(async (res) => {
          dispatch({
            type: UPDATE_STUDIOS,
            data: {
              studios: [ await res.json() ]
            }
          })

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

