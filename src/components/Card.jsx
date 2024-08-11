import React from "react";

function Card(props) {
  return (
    <div id="fifa-card">
      <h1 id="name">{props.playerName}</h1>
      <img id="player" src={props.src} alt="" />
      <h1 id="power">{props.power}</h1>
      <img id="flag" src={props.country} alt="" />
      <h1 id="position">{props.position}</h1>
      <img id="team" src={props.team} alt="" />
      <h2 id="pac">{props.pac}</h2>
      <h2 id="sho">{props.sho}</h2>
      <h2 id="pas">{props.pas}</h2>
      <h2 id="dri">{props.dri}</h2>
      <h2 id="def">{props.def}</h2>
      <h2 id="phy">{props.phy}</h2>
    </div>
  );
}

export default Card;
