import {
  SEARCH_POKEMON,
  GET_POKEMON_DATA,
  GET_POKEMONS,
  HANDLE_GLOBAL_STATE,
} from "../types";

const initialState = {
  get_pokemon: {},
  get_pokemon_data: [],
  global: {
    page: 0,
    total: 0,
    loading_landingPage: true,
    loading_detailPage: true,
    notFound: false,
    searching: false,
  },
};

export default (pokemon = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMON:
      return action.payload;
    case GET_POKEMON_DATA:
      return { ...pokemon, get_pokemon_data: action.payload };
    case GET_POKEMONS:
      return { ...pokemon, get_pokemon: action.payload };
    case HANDLE_GLOBAL_STATE:
      return {
        ...pokemon,
        global: {
          ...pokemon.global,
          [action.payload.params.name]: action.payload.params.val,
        },
      };
    default:
      return pokemon;
  }
};
