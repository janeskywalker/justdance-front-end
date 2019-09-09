import {  LOG_IN, LOG_OUT, CREATE_MESSAGE, DELETE_MESSAGE } from "../actions/actionTypes";

const initialState = {
    currentUser: null,
    // currentUser: null,
    currentStudio: null,
    studios: []   
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
                    if (studio._id === action.newMessage.studioId) {
                        return Object.assign({}, studio, {
                            messages: [ ...studio.messages, action.newMessage ]
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
                            messages: studio.messages.filter(message=>message._id !== action.data.messageId)
                        })
                    } else {
                        return studio
                    }
                })
            })
 

            default: 
                return state
    }


}

export default reducer