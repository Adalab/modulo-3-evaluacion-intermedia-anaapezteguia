import "../stylesheets/App.scss";
import React, { useState } from "react";
import dataArray from "../data/data.json";
import PokeList from "./PokeList";

const App = () => {
  const [data] = useState(dataArray);
  const [fav, setFav] = useState([]);

  const handleFavorites = (selected) => {
    //busco el index
    const favoriteIndex = fav.findIndex((favorite) => {
      return favorite.id === selected;
    });
    if (favoriteIndex === -1) {
      //busco el pokemon
      const clickedCreature = data.find((creature) => {
        return creature.id === selected;
      });
      //lo meto en favoritos
      fav.push(clickedCreature);
      setFav([...fav]);
      console.log(fav);
    } else {
      fav.splice(favoriteIndex, 1);
      setFav([...fav]);
    }
  };

  return (
    <div className="App">
      <PokeList
        pokemonArray={data}
        handleFavorites={handleFavorites}
        className="pokelist"
      />
    </div>
  );
};

export default App;
