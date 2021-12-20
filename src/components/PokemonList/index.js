import React from "react";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../Assets/loading/Spinner.svg";
import { handleGlobal } from "../../redux/actions/Pokemon";

const PokemonList = () => {
  const loading = useSelector(
    (state) => state.PokemonReducer.global.loading_landingPage
  );
  const total = useSelector((state) => state.PokemonReducer.global.total);
  const page = useSelector((state) => state.PokemonReducer.global.page);

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

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    handleGlobalState("page", nextPage);
    // setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    handleGlobalState("page", nextPage);
    // setPage(nextPage);
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
