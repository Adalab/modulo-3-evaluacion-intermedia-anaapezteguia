import "../stylesheets/App.scss";
import React from "react";
import dataArray from "../data/data.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: dataArray };
  }
  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <PokeList pokemonArray={this.state.data} />
      </div>
    );
  }
}

export default App;
