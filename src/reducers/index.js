import {  LOG_IN, LOG_OUT, CREATE_REVIEW, DELETE_REVIEW } from "../actions/actionTypes";

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

        case CREATE_REVIEW:
            return Object.assign({}, state, {
                studios: state.studios.map((studio) => {
                    if (studio.id === action.newReview.studioId) {
                        return Object.assign({}, studio, {
                            reviews: [ ...studio.reviews, action.newReview ]
                        })
                    } else {
                        return studio
                    }
                })
            })

        case DELETE_REVIEW:
            return Object.assign({}, state, {
                studios: state.studios.map((studio) => {
                    if (studio.id === action.data.studioId) {
                        console.log(action.data.studioId)
                        return Object.assign({}, studio, {
                            reviews: studio.reviews.filter(review=>review.id !== action.data.reviewId)
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