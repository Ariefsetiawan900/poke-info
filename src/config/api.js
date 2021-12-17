import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export default {
  actions:{
    // Search Pokemon
    searchPokemon =(pokemon)=>{
      return new Promise((resolve,reject)=>{
        try {
          const response = axios.get(`${BASE_URL}/${pokemon}`)
          resolve(response.data)
        } catch (error) {
          reject(error)
        }
      })
    },
// get pokemons
    getPokemons = (limit = 25, offset = 0)=>{
      return new Promise((resolve,reject)=>{
        try {
          const response = axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`)
          resolve(response.data)
        } catch (error) {
          reject(error)
        }
      })
    },
// get pokemon data
    getPokemonData = (url)=>{
      return new Promise((resolve,reject)=>{
        try {
          const response = axios.get(url)
          resolve(response.data)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
