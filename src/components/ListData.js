import React from "react";
import Card from "./Card";

const ListData = (props) => {
  const { notFound, loading, pokemons, page, setPage, total } = props;

  
  return (
    <section
      className="listdata-section"
      style={{ backgroundColor: "#eee", height: "100vh" }}
    >
      <div className="container">
        
          {
            notFound ? (
              <span>kosong</span>
            ):(
              <div className="card-container">
                {/* {
                  pokemons.map((pokemon,id)=>{
                    return <Card pokemon={pokemon} key={pokemon.name} />
                  })
                }
               */}
              </div>
            )
          }
       
      </div>
    </section>
  );
};

export default ListData;
