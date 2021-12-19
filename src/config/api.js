import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default {
  // Search Pokemon
  searchPokemon(pokemon) {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${BASE_URL}/${pokemon}`)
          .then((result) => resolve(result.data));
      } catch (error) {
        reject(error);
      }
    });
  },
  // get pokemons
  getPokemons(limit = 25, offset = 0) {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(`${BASE_URL}?limit=${limit}&offset=${offset}`)
          .then((result) => resolve(result.data));
      } catch (error) {
        reject(error);
      }
    });
  },
  // get pokemon data
  getPokemonData(url) {
    return new Promise((resolve, reject) => {
      try {
         axios.get(url).then((result) => resolve(result.data));
      } catch (error) {
        reject(error);
      }
    });
  },
};