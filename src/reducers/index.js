const initialState = {
    currentUser: {
        id: 1,
        name: 'Jane',
        email: 'test@test.com',
        avatar: 'avatar.jpg',
    },
    currentStudio: null,
    studios: [],
    reviews: [],
    
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer