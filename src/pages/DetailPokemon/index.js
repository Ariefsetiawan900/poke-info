import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon } from '../../config/Api'
import {
  setPokemonDetail,
  emptyState,
  handleGlobal,
} from "../../redux/actions/Pokemon";
import { PokemonDetail, Header, Arrows } from "../../components";
import { Link } from "react-router-dom";
import Spinner from "../../Assets/loading/Spinner.svg";

import "./style.css";

const DetailPokemon = () => {
  const { id } = useParams();
  const loading = useSelector(
    (state) => state.PokemonReducer.global.loading_detailPage
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

  const fetchPokemon = async () => {
    try {
      handleGlobalState("loading_detailPage", true);
      let response = await searchPokemon(id);
      dispatch(setPokemonDetail(response));
      handleGlobalState("loading_detailPage", false);
      document.title = response.name;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
    return () => {
      dispatch(emptyState());
    };
  }, [id]);

  return (
    <section className="section-detail-pokemon">
      <Header isCenter />
      <Link to="/" className="wrapper-btn-black">
        <button className="btn-back">
          <Arrows align="left" />
        </button>
      </Link>
      <div className="flex">
        {loading ? (
          <div className="center">
            <img src={Spinner} alt="Loading..." />
          </div>
        ) : (
          <>
            <PokemonDetail />
            <PokemonDetail progress />
          </>
        )}
      </div>
    </section>
  );
};

export default DetailPokemon;
