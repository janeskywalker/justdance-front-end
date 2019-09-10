import {  SIGN_UP, LOG_IN, LOG_OUT, CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_STUDIOS} from "../actions/actionTypes";

const initialState = {
    currentUser: null,
    // currentUser: null,
    currentStudio: null,
    areStudiosLoaded: false,
    studios: {}
}

const reducer = (state = initialState, action) => {
    console.log('action: ', action)
    
    switch(action.type) {

        case  SIGN_UP:
            return Object.assign({}, state, {
                currentUser: action.data.newUser
            })


        case LOG_IN:
            return Object.assign({}, state, {
                currentUser: action.data.currentUser
            })

        case LOG_OUT:
            return Object.assign({}, state, {
                currentUser: null
            })

        case CREATE_MESSAGE: {
            const studioToUpdate = state.studios[action.data.newMessage.studioId]
            const updatedStudio = Object.assign({}, studioToUpdate, {
                messages: [ action.data.newMessage, ...studioToUpdate.messages ]
            })

            return Object.assign({}, state, {
                studios: Object.assign({}, state.studios, {
                    [action.data.newMessage.studioId]: updatedStudio
                })
            })
        }

        case DELETE_MESSAGE:
            const studioToUpdate = state.studios[action.data.studioId]
            const updatedStudio = Object.assign({}, studioToUpdate, {
                messages: studioToUpdate.messages.filter(message => message._id !== action.data.messageId)
            })

            return Object.assign({}, state, {
                studios: Object.assign({}, state.studios, {
                    [action.data.studioId]: updatedStudio
                })
            })


        case UPDATE_STUDIOS:
            const newStudios = action.data.studios.reduce((acc, studio) => {
                acc[studio._id] = studio
                return acc
            }, {})

            console.log('newStudios: ', newStudios)

            const newState = Object.assign({}, state, {
                areStudiosLoaded: action.data.areStudiosLoaded || state.areStudiosLoaded,
                studios: Object.assign({}, state.studios, newStudios)
            })

            console.log('newState: ', newState)

            return newState
 

            default: 
                return state
    }


}

export default reducer