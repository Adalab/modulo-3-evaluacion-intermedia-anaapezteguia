import "../stylesheets/pokelist.scss";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

function PokeList(props) {
  const pokemonList = props.pokemonArray.map((pokemon) => {
    return (
      <li key={pokemon.id.toString()} className="pokelist__list--item">
        <Pokemon
          id={pokemon.id}
          name={pokemon.name}
          imgSrc={pokemon.url}
          types={pokemon.types}
          evolution={pokemon.evolution}
          handleFavorites={props.handleFavorites}
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
PokeList.propTypes = {
  pokemonArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PokeList;
