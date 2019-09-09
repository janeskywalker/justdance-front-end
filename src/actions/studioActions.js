import { GET_STUDIOS} from './actionTypes';

export function getStudios() {
    console.log('getting studios')
    return {
        type: GET_STUDIOS,
        
    }
}