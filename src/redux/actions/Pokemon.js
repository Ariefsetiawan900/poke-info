import { GET_POKEMONS, GET_POKEMON_DATA, SEARCH_POKEMON } from "../types";

export const GetPokemons = (params) => {
  return {
    type: GET_POKEMONS,
    payload: params,
  }
}
export const setPokemons = (params) => {
  return {
    type: GET_POKEMON_DATA,
    payload: params,
  }
}
export const searchPokemon = (params) => {
  return {
    type: SEARCH_POKEMON,
    payload: params,
  }
}
