import "../stylesheets/pokemon.scss";

function Pokemon(props) {
  const pokemonTypes = props.types.map((item, i) => {
    // console.log(props.types);

    return (
      <li key={i} className={`pokemon__list--type ${item}`}>
        {item}
      </li>
    );
  });
  return (
    <article className="pokemon">
      <img className="pokemon__img" src={props.imgSrc} alt={props.name} />
      <h2 className="pokemon__name">{props.name}</h2>
      <ul className="pokemon__list">{pokemonTypes}</ul>
    </article>
  );
}

export default Pokemon;
