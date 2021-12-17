import React from 'react'

const Card = ({pokemon}) => {
  const style = `${pokemon.types[0].type.name} card`
  console.log(pokemon)
    return (
        <section className={style}>
          <div className="img-container">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
          </div>
          <div className="info">
            <span className="number">#{pokemon.id}</span>
            <h3 className="name">{pokemon.name}</h3>
            <small className="type">Type: {pokemon.types[0].type.name}</small>
          </div>
        </section>
    )
}

export default Card
