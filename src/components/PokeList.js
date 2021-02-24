import Pokemon from "./Pokemon";

function PokeList(props) {
  const pokemonList = props.pokemonArray.map((pokemon) => {
    // console.log(pokemon);
    return (
      <li key={pokemon.id} className="App__list--item">
        <Pokemon
          name={pokemon.name}
          imgSrc={pokemon.url}
          types={pokemon.types}
        />
      </li>
    );
  });
  return (
    <>
      <h1 className="App__title">Mi lista de pokemon</h1>
      <ul className="App__list">{pokemonList}</ul>
    </>
  );
}

export default PokeList;
