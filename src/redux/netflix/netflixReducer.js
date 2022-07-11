const INITIAL_STATE = {
    listePokemons : [],
    listePokemonsCaptures: [],
    show: false
}

function NetflixReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD-POKEMON': {
            return{
                ...state,
                listePokemons: [...state.listePokemons, action.payload]
            }
        }
        case 'ADD-POKEMON-CAPTURE': {
            return{
                ...state,
                listePokemonsCaptures: [...state.listePokemonsCaptures, action.payload]
            }
        }
        case 'CLEAR-CAPTURES': {
            return{
                ...state,
                listePokemonsCaptures: action.payload
            }
        }
        case 'INVERSE': {
            return{
                ...state,
                show: !state.show
            }
        }
        default: return state
    }
}

export default NetflixReducer