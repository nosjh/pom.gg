import React from "react";
import "../../styles/Player.scss";

function RosterT1({ player }) {
  const { name, role, image_url, nationality, birthday } = player;

  const birth = birthday
    ? birthday.slice(0, 10)
    : "NO DATA";

  return (
    <div className="info-player-detail Poppins-Regular font-12">
      <div className="player">
        <img src={image_url} alt={name} />
      </div>
      <div className="player-name">
        <div>{name}</div>
      </div>
      <div className="position">
        <img src={`img/position/${role}.svg`} alt={role} />
      </div>
      <div className="nation">{nationality}</div>
      <div className="birth">{birth}</div>
    </div>
  );
}

export default RosterT1;
