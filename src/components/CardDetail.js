// import React,{useEffect,useState} from "react";
// import { useSelector } from "react-redux";

// const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

// const CardDetail = () => {
//   const [modalState, setModalState] = useState(false)

//   const toggleModalState = () => {
//     setModalState(!modalState)
//   }
//   const pokemon = useSelector(
//     (state) => state.PokemonReducer.get_pokemon
//   );

//   return (

//     <div className="col">
//       <div className="card1">
//         <div className="card-header1">
//           <h5>{pokemon.name}</h5>
          
//             <img src={`${IMG_URL}/${pokemon.id}.png`} alt={pokemon.name} />
          
//         </div>
//         <div className="card-body1">
//           <h5>ID</h5>
//           <span>#{pokemon.id}</span>
//           <h5>Weight</h5>
//           <span>{pokemon.weight}</span>
//           <h5>Height</h5>
//           <span>{pokemon.height}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;
