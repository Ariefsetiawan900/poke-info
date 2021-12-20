import {
  GET_POKEMONS,
  GET_POKEMON_DATA,
  SEARCH_POKEMON,
  HANDLE_GLOBAL_STATE,
  EMPTY_STATE,
} from "../types";

// get Pokemon data
export const setPokemonDetail = (params) => {
  return {
    type: GET_POKEMONS,
    payload: params,
  };
};

// get all pokemons
export const setPokemons = (params) => {
  return {
    type: GET_POKEMON_DATA,
    payload: params,
  };
};

// get a pokemon
export const searchPokemon = (params) => {
  return {
    type: SEARCH_POKEMON,
    payload: params,
  };
};

// handle onChange Global state
export const handleGlobal = (params) => {
  return {
    type: HANDLE_GLOBAL_STATE,
    payload: params,
  };
};

//Empty State
export const emptyState = () => {
  return {
    type: EMPTY_STATE,
  };
};
