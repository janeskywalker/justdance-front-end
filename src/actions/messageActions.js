import { CREATE_MESSAGE, DELETE_MESSAGE } from './actionTypes';
import uuid from 'uuid'

export function createMessage(newMessage) {
    console.log('create: ', newMessage)
    return {
        type: CREATE_MESSAGE,
        newMessage: Object.assign({}, newMessage, {id: uuid()})
    }
}

export function deleteMessage(data) {
    console.log('deleteing -- action ')
    return {
        type: DELETE_MESSAGE,
        data: data
    }
}