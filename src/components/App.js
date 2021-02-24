import "../stylesheets/App.scss";
import React from "react";
import pokemonArray from "../data/data.json";

class App extends React.Component {
  render() {
    console.log(pokemonArray);
    return <div className="App">Hola mundo</div>;
  }
}

export default App;
