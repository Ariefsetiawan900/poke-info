import { GET_POKEMONS, GET_POKEMON_DATA, SEARCH_POKEMON } from "../types";
import * as api from "../../config/api";

// search pokemon
export const searchPokemon = (pokemon) => async (dispatch) => {
  try {
    const { data } = await api.searchPokemon(pokemon);
    dispatch({ type: SEARCH_POKEMON, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// get pokemons
export const getPokemons = (limit, offset) => async (dispatch) => {
  try {
    const { data } = await api.getPokemons(limit, offset);
    dispatch({ type: GET_POKEMONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// get pokemon data
export const getPokemonData = (url) => async (dispatch) => {
  try {
    const { data } = await api.getPokemonData(url);
    dispatch({ type: GET_POKEMON_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
