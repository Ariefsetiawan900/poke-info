import { SEARCH_POKEMON, GET_POKEMON_DATA, GET_POKEMONS } from "../types";

const initialState ={
  get_pokemon :{},
  get_pokemon_data:[],

}

export default (pokemon = initialState, action) => {
  switch (action.type) {
    case SEARCH_POKEMON:
      return action.payload;
    case GET_POKEMON_DATA:
      return {...pokemon,get_pokemon_data:action.payload}
    case GET_POKEMONS:
      return {...pokemon,get_pokemon:action.payload};
    default:
      return pokemon;
  }
};
