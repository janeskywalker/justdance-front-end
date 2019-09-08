import { CREATE_REVIEW, DELETE_REVIEW } from "../actions/actionTypes";

const initialState = {
    currentUser: {
        id: 1,
        name: 'Jane',
        email: 'test@test.com',
        avatar: 'avatar.jpg',
    },
    currentStudio: null,
    studios: [
        {
            id: 1,
            name: 'Phoenix Aerial Art & Pole',
            image: 'assets/phoenix.png',
            reviews: [],
            address: {
                street: "1636 University Ave",
                city: "Berkeley",
                zip: 99999
            }
        },

        {
            id: 2,
            name: 'Inspiration Studios',
            image: 'assets/pole.png',
            reviews: [],
            address: {
                street: "2682 Middlefield Rd",
                city: "Redwood City",
                zip: 99999
            }
        },

        {
            id: 3,
            name: 'Crunch Fitness',
            image: 'assets/pole2.png',
            reviews: [],
            address: {
                street: "61 New Montgomery St",
                city: "San Francisco",
                zip: 99999
            }
        },

        {
            id: 4,
            name: "Gypsy Love Belly Dancing",
            image: 'assets/belly.png',
            reviews: [],
            address: {
                street: "1731 Buchanan St",
                city: "Janpan Town",
                zip: 99999
            }
        },


        {
            id: 5,
            name: "Albeto's Salsa & Bachata",
            image: 'assets/albeto.png',
            reviews: [],
            address: {
                street: "736 West Dance St",
                city: "Mountain View",
                zip: 99999
            }
        },


        {
            id: 6,
            name: "Allegro Salsa Dancing",
            image: 'assets/salsa.png',
            reviews: [],
            address: {
                street: "4 Embarcadero Ctr",
                city: "San Francisco",
                zip: 99999
            }
        },

    ],
    
    
}

const reducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch(action.type) {
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
                    
 

            default: 
                return state
    }


}

export default reducer