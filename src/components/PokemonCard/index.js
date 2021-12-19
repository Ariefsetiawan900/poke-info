import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css"

const PokemonCard = () => {
  const pokemons = useSelector(
    (state) => state.PokemonReducer.get_pokemon_data
  );
  const renderList = pokemons.map((pokemon, id) => {
    const style = `${pokemon.types[0].type.name} card`;
    return (
      <Link key={id} className="text-normal" to={`/pokemon/${pokemon.id}`}>
        <section className={style}>
          <div className="img-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className="info">
            <span className="number">#{pokemon.id}</span>
            <h3 className="name">{pokemon.name}</h3>
            <small className="type">Type: {pokemon.types[0].type.name}</small>
          </div>
        </section>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default PokemonCard;
