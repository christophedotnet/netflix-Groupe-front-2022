const INITIAL_STATE = {
    user : null,
    ressources : [],
    faqs : []
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