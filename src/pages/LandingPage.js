import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Api from "../config/Api";
import { Header, PokemonList } from "../components";
import { setPokemons } from "../redux/actions/Pokemon";

const LandingPage = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await Api.getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await Api.getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      dispatch(setPokemons(results));
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
  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await Api.searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      dispatch(setPokemons([result]));
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  return (
    <>
      <Header onSearch={onSearch} />
      {notFound  ? (
        <div className="center">Empty data</div>
      ) : (
        <PokemonList
          loading={loading}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </>
  );
};

export default LandingPage;
