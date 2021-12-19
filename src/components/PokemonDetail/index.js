import React from "react";
import { useSelector } from "react-redux";
import "./style.css"

const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const PokemonDetail = () => {
  const pokemon = useSelector((state) => state.PokemonReducer.get_pokemon);
  return (
    <div className="pokemon-detail">
      <div className="pokemon-detail-header" />
      <div className="pokemon-detail-body">
        <img
          src={`${IMG_URL}/${pokemon.id}.png`}
          alt={pokemon.name}
          className="pokemon-detail-body-img"
        />
        <h1 className="pokemon-detail-body-title">{pokemon.name}</h1>
        <p className="pokemon-detail-body-text">#{pokemon.id}</p>
      </div>
      <div className="pokemon-detail-footer">
        <div className="pokemon-detail-footer-social">
          <h3>Weight</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div className="pokemon-detail-footer-social">
          <h3>Height</h3>
          <p>{pokemon.height}</p>
        </div>
        <div className="pokemon-detail-footer-social">
          <h3>Base Exp</h3>
          <p>{pokemon.base_experience}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
