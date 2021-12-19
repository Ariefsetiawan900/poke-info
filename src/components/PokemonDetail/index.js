import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "../../components";
import "./style.css";

const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const PokemonDetail = ({ progress }) => {
  const pokemon = useSelector((state) => state.PokemonReducer.get_pokemon);
  const style = `${
    pokemon.types && pokemon.types[0].type.name
  } pokemon-detail-header`;

  if (progress) {
    return (
      <div className="pokemon-detail">
        <div className="pokemon-detail-body-progress">
          <h1 className="pokemon-detail-body-title">Base Stats</h1>
          {pokemon.stats &&
            pokemon.stats.map((stat, key) => {
              return (
                <div className="text-center" key={key}>
                  <p>{stat.stat.name}</p>
                  <Progress done={stat.base_stat} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div className="pokemon-detail">
      <div className={style} />
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
      <div className="pokemon-detail-footer">
        <div className="pokemon-detail-footer-social">
          <h3>Abilities</h3>
          {pokemon.abilities &&
            pokemon.abilities.map((ability, key) => {
              return <p key={key}>{ability.ability.name}</p>;
            })}
        </div>
        <div className="pokemon-detail-footer-social">
          <h3>Type</h3>
          {pokemon.types &&
            pokemon.types.map((type, key) => {
              return <p key={key}>{type.type.name}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
