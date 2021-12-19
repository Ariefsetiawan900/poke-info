import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Api from "../config/Api";
import { GetPokemons } from "../redux/actions/Pokemon";
import CardDetail from "../components/CardDetail";

const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(
        (state) => state.PokemonReducer.get_pokemon
       );

  const fetchPokemon = async () => {
    try {
      let response = await Api.searchPokemon(id);
      dispatch(GetPokemons(response));
      console.log(response)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id && id !== "") fetchPokemon();
  }, [id]);

  const style = `${pokemon.types[0].type.name} card-header1`;

  return (
    <main class="flex">
        <div class="card1">
            <div className={style}/>
            <div class="card-body1">
            <img src={`${IMG_URL}/${pokemon.id}.png`} alt={pokemon.name}  class="card-body-img1"/>
                <h1 class="card-body-title1">
                    {pokemon.name}
                </h1>
                <p class="card-body-text1">#{pokemon.id}</p>
            </div>
            <div class="card-footer1">
                <div class="card-footer-social1">
                    <h3>Weight</h3>
                    <p>{pokemon.weight}</p>
                </div>
                <div class="card-footer-social1">
                    <h3>Height</h3>
                    <p>{pokemon.height}</p>
                </div>
                <div class="card-footer-social1">
                    <h3>Base Exp</h3>
                    <p>{pokemon.base_experience}</p>
                </div>
            </div>
        </div>
    </main>
  );
};

export default DetailPokemon;
{/* <div style={{ width: "100%" }}>
<div className="container wrapper">
  <CardDetail/>
</div>
<div></div>
</div> */}