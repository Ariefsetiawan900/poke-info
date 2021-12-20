import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../config/Api";
import { Header, PokemonList } from "../../components";
import { setPokemons, handleGlobal } from "../../redux/actions/Pokemon";

const LandingPage = () => {
  const notFound = useSelector((state) => state.PokemonReducer.global.notFound);
  const page = useSelector((state) => state.PokemonReducer.global.page);
  const searching = useSelector(
    (state) => state.PokemonReducer.global.searching
  );

  const dispatch = useDispatch();
  const handleGlobalState = (name, val) => {
    dispatch(
      handleGlobal({
        params: {
          name,
          val,
        },
      })
    );
  };

  const fetchPokemons = async () => {
    try {
      handleGlobalState("loading_landingPage", true);
      const data = await Api.getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await Api.getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      dispatch(setPokemons(results));
      handleGlobalState("loading_landingPage", false);
      handleGlobalState("total", Math.ceil(data.count / 25));
      handleGlobalState("notFound", false);
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
    handleGlobalState("loading_landingPage", true);
    handleGlobalState("notFound", false);
    handleGlobalState("searching", true);
    // setSearching(true);
    const result = await Api.searchPokemon(pokemon);
    if (!result) {
      handleGlobalState("notFound", true);
      handleGlobalState("loading_landingPage", false);
      return;
    } else {
      dispatch(setPokemons([result]));
      handleGlobalState("page", 0);
      handleGlobalState("total", 1);
    }
    handleGlobalState("loading_landingPage", false);
    handleGlobalState("searching", false);
    // setSearching(false);
  };
  return (
    <>
      <Header onSearch={onSearch} />
      {notFound ? <div className="center">Empty data</div> : <PokemonList />}
    </>
  );
};

export default LandingPage;
