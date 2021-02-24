function Pokemon(props) {
  const pokemonTypes = props.types.map((item, i) => {
    // console.log(props.types);
    return (
      <li key={i} className="item__list--type">
        {item}
      </li>
    );
  });
  return (
    <article className="App__item">
      <img className="App__item--img" src={props.imgSrc} alt={props.name} />
      <h2 className="App__item--name">{props.name}</h2>
      <ul className="item__list">{pokemonTypes}</ul>
    </article>
  );
}

export default Pokemon;
