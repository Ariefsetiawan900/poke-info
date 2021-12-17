import { SEARCH_POKEMON, GET_POKEMON_DATA, GET_POKEMONS } from "../types";

export default (pokemon = [], action) => {
  switch (action.type) {
    case SEARCH_POKEMON:
      return action.payload;
    case GET_POKEMON_DATA:
      return action.payload;
    case GET_POKEMONS:
      return action.payload;
    default:
      return pokemon;
  }
};
