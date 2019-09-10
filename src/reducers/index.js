import {  LOG_IN, LOG_OUT, CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_STUDIOS} from "../actions/actionTypes";

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

        case LOG_IN:
            return Object.assign({}, state, {
                currentUser: action.data.currentUser
            })

        case LOG_OUT:
            return Object.assign({}, state, {
                currentUser: null
            })

        case CREATE_MESSAGE:
            return Object.assign({}, state, {
                studios: state.studios.map((studio) => {
                    if (studio._id === action.data.newMessage.studioId) {
                        return Object.assign({}, studio, {
                            messages: [ ...studio.messages, action.data.newMessage ]
                        })
                    } else {
                        return studio
                    }
                })
            })

        case DELETE_MESSAGE:
            return Object.assign({}, state, {
                studios: state.studios.map((studio) => {
                    if (studio._id === action.data.studioId) {
                        console.log(action.data.studioId)
                        return Object.assign({}, studio, {
                            messages: studio.messages.filter(message => message._id !== action.data.messageId)
                        })
                    } else {
                        return studio
                    }
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