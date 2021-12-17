import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {
  searchPokemon,
  getPokemonData,
  getPokemons,
} from "../redux/actions/Pokemon";
import Hero from "../components/Hero";
import ListData from "../components/ListData";

const LandingPage = () => {
  const [pokemons, setPokemons] = useState();
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.PokemonReducer.get_pokemon)
  const dataPokemon = useSelector((state)=>state.PokemonReducer.get_pokemon_data)



  useEffect(() => {

  
  }, [page,dispatch]);
  return (
    <div>
      <Hero />
      <ListData
      notFound={notFound}
      loading={loading}
      pokemons={pokemons}
      page={page}
      setPage={setPage}
      total={total}
      />
    </div>
  );
};

export default LandingPage;
