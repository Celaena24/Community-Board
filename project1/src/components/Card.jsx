const Card = ({img, name, desc, url}) => {
    return (
    <div className = "card">
      <img src={img}></img>
      <h3>{name}</h3>
      <p>{desc}</p>
      <button onClick={() => window.open(url, "_blank")}>Visit Site</button>
    </div>
    )
}


export default Card;