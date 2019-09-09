import { GET_STUDIOS} from './actionTypes';


const GET_STUDIOS_URL = 'http://localhost:4000/api/v1/studios'

export function getStudios() {
    console.log('getting studios')
    // return (dispatch) => {
    //     type: GET_STUDIOS,
        
    // }


    return (dispatch) => {
        fetch(GET_STUDIOS_URL, {
          method: 'GET',
        }).then(async (res) => {
          dispatch({
            type: GET_STUDIOS,
            data: {
              studios: await res.json()
            }
          })
        })
      }
}