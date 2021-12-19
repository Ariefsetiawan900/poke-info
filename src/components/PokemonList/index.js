import React from "react";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";
import Spinner from "../../Assets/loading/Spinner.svg";

const PokemonList = (props) => {
  const { loading, page, setPage, total } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <section className="pokemonlist-section" style={{ height: "auto" }}>
      <div className="container">
        {loading ? (
          <div className="center">
            <img src={Spinner} alt="Loading..." />
          </div>
        ) : (
          <div className="card-container">
            <PokemonCard />
          </div>
        )}
      </div>
      <div className="pagination-wrapper">
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </div>
    </section>
  );
};

export default PokemonList;
