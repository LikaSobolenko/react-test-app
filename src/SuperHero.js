function SuperHero(props) {
  return (
    <div className="article">
      <img src={props.imgLink} alt={props.title} />
      <h2>{props.name}</h2>
      <p>{props.universe}</p>
      <p>{props.alterego}</p>
      <p>{props.occupation}</p>
      <p>{props.friends}</p>
      <p>{props.superpowers}</p>
      <p>{props.info}</p>
    </div>
  );
}

export default SuperHero;
