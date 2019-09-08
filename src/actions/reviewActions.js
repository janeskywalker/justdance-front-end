import { CREATE_REVIEW, DELETE_REVIEW } from './actionTypes';

export function createReview(newReview) {
    console.log('create: ', newReview)
    return {
        type: CREATE_REVIEW,
        newReview,
    }
}