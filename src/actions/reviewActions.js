import { CREATE_REVIEW, DELETE_REVIEW } from './actionTypes';
import uuid from 'uuid'

export function createReview(newReview) {
    console.log('create: ', newReview)
    return {
        type: CREATE_REVIEW,
        newReview: Object.assign({}, newReview, {id: uuid()})
    }
}

export function deleteReview(data) {
    console.log('deleteing -- action ')
    return {
        type: DELETE_REVIEW,
        data: data
    }
}