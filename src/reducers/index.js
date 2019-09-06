const initialState = {
    currentUser: {
        id: 1,
        name: 'Jane',
        email: 'test@test.com',
        avatar: 'avatar.jpg',
    },
    studios: [],
    reviews: [],
    currentStudio: null,
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer