import React from "react";
import Card from "./Card";

const ListData = (props) => {
  const { notFound, loading, pokemons, page, setPage, total } = props;

  return (
    <section className="listdata-section" style={{ height: "auto" }}>
      <div className="container">
        <div className="card-container">
          {pokemons.map((pokemon, id) => {
            return <Card pokemon={pokemon} key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ListData;
