import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Assets/loading/Spinner.svg";
import Api from "../config/Api";
import Hero from "../components/Hero";
import ListData from "../components/ListData";

const LandingPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.PokemonReducer.get_pokemon);
  const dataPokemon = useSelector(
    (state) => state.PokemonReducer.get_pokemon_data
  );

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await Api.getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await Api.getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);
  return (
    <div>
      <Hero />
      {notFound ? (
        <div className="loading">
          <img src={Spinner} alt="Loading..." />
        </div>
      ) : (
        <ListData
          notFound={notFound}
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </div>
  );
};

export default LandingPage;
