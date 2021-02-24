import "../stylesheets/App.scss";
import React from "react";
import pokemonArray from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: pokemonArray };
  }
  render() {
    console.log(this.state.data);
    return <div className="App">Hola mundo</div>;
  }
}

export default App;
