const INITIAL_STATE = {
    user : null,
    ressources : []
}

function NetflixReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET-RESSOURCE': {
            return{
                ...state,
                ressources: [...state.ressources, action.payload]
            }
        }
        case 'SET-USER': {
            return{
                ...state,
                listePokemonsCaptures: [...state.listePokemonsCaptures, action.payload]
            }
        }
        default: return state
    }
}

export default NetflixReducer