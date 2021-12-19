import React, {  useEffect } from "react";
import { useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import Api from "../config/Api";
import {
  setPokemonDetail,
} from "../redux/actions/Pokemon";
import { PokemonDetail,Header } from "../components";

const DetailPokemon = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    try {
      let response = await Api.searchPokemon(id);
      dispatch(setPokemonDetail(response));

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id && id !== "") fetchPokemon();
  }, [id]);

  return (
    <section className="section-detail-pokemon">
      <Header isCenter/>
    <div className="flex">
      <PokemonDetail />
    </div>
    </section>
  );
};

export default DetailPokemon;
