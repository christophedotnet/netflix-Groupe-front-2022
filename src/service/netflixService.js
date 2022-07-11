import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

export const getPokemon = (id) => {
    return axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
}

export const getPokemons = () => {
    return axios.get(url);
}