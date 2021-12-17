import axios from "axios";

const API = axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon" });

// search pokemon
export const searchPokemon = (pokemon) => API.get(`/${pokemon}`);

// get pokemons
export const getPokemons = (limit = 25, offset = 0) =>
  API.get(`?limit=${limit}&offset=${offset}`);

// get pokemon data
export const getPokemonData = (url) => API.get(url);
