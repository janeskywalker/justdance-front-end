import { UPDATE_STUDIOS } from './actionTypes';


const GET_STUDIOS_URL = 'http://localhost:4000/api/v1/studios'
const GET_STUDIO_URL = 'http://localhost:4000/api/v1/studios/'

export function getStudios() {
    console.log('getting studios')

    return (dispatch) => {
        fetch(GET_STUDIOS_URL, {
          method: 'GET',
        }).then(async (res) => {
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
    return (dispatch) => {
        fetch(`${GET_STUDIO_URL}${id}`, {
          method: 'GET',
        }).then(async (res) => {
          dispatch({
            type: UPDATE_STUDIOS,
            data: {
              studios: [ await res.json() ]
            }
          })
        })
      }
}

