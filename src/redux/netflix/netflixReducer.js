const INITIAL_STATE = {
    user : { avatar: "http://alisacruise.com/public/upload/avatars/no_avatar.jpg" },
    faqs: [
        {
            Question:"Question 1",
            Response: "Response 1"
        },
        {
            Question:"Question 2",
            Response: "Response 2"
        },
        {
            Question:"Question 3",
            Response: "Response 3"
        },
        {
            Question:"Question 4",
            Response: "Response 4"
        },
        {
            Question:"Question 5",
            Response: "Response 5"
        }
    ],
    ressources : []
}

function NetflixReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-RESSOURCE': {
            return{
                ...state,
                ressources: [...state.ressources, action.payload]
            }
        }
        case 'ADD-FAQ': {
            return{
                ...state,
                faqs: [...state.faqs, action.payload]
            }
        }
        case 'SET-USER': {
            return{
                ...state,
                user: action.payload
            }
        }
        default: return state
    }
}

export default NetflixReducer