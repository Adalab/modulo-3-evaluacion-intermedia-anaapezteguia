import "../stylesheets/pokelist.scss";
import Pokemon from "./Pokemon";

function PokeList(props) {
  const pokemonList = props.pokemonArray.map((pokemon) => {
    // console.log(pokemon);
    return (
      <li key={pokemon.id} className="pokelist__list--item">
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
      <h1 className="pokelist__title">Mi lista de pokemon</h1>
      <ul className="pokelist__list">{pokemonList}</ul>
    </>
  );
}

export default PokeList;
