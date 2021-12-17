import { GET_POKEMONS, GET_POKEMON_DATA, SEARCH_POKEMON } from "../types";

export const arrGetPokemons = (params) => {
  return {
    type: GET_POKEMONS,
    payload: params,
  }
}
export const arrGetPokemonData = (params) => {
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
