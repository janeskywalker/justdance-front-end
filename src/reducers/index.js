
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
            address: {
                street: "4 Embarcadero Ctr",
                city: "San Francisco",
                zip: 99999
            }
        },

    ],
    reviews: [],
    
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer