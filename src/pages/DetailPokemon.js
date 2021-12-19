import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Api from "../config/Api";
import { setPokemonDetail } from "../redux/actions/Pokemon";
import { PokemonDetail, Header,Arrows } from "../components";
import { Link } from 'react-router-dom'
import Spinner from '../Assets/loading/Spinner.svg'

const DetailPokemon = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      let response = await Api.searchPokemon(id);
      dispatch(setPokemonDetail(response));
      setLoading(false)
      document.title = response.name;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <section className="section-detail-pokemon">
      <Header isCenter />
      <Link to="/" className="wrapper-btn-black">
      <button className="btn-back"><Arrows align="left"/></button>
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
