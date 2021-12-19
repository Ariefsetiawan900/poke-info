import { GET_POKEMONS, GET_POKEMON_DATA, SEARCH_POKEMON } from "../types";

// get Pokemon data
export const setPokemonDetail = (params) => {
  return {
    type: GET_POKEMONS,
    payload: params,
  }
}

// get all pokemons
export const setPokemons = (params) => {
  return {
    type: GET_POKEMON_DATA,
    payload: params,
  }
}

// get a pokemon 
export const searchPokemon = (params) => {
  return {
    type: SEARCH_POKEMON,
    payload: params,
  }
}


