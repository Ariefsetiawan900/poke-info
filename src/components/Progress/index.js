import React, { useState } from "react";
import {useSelector} from 'react-redux'
import "./style.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});
  const pokemon = useSelector((state) => state.PokemonReducer.get_pokemon);

  const styling =  `${
    pokemon.types && pokemon.types[0].type.name
  } progress-done`;

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className={styling} style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
