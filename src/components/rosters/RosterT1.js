import React from "react";
import "../../styles/Player.scss";

function RosterT1({ player }) {
  const { name, first_name, last_name, role, image_url, birthday, nationality } = player;

  const fullName = first_name && last_name ? `${first_name} ${last_name}` : "";
  const birth = birthday ? birthday.slice(0, 10) : "NO DATA";

  return (
    <div className="info-player-detail Poppins-Regular font-12">
      <div className="player">
        <img src={image_url} alt={name} />
      </div>
      <div className="player-name">
        <div className="match-name">{name}</div>
        <div className="full-name">{fullName}</div>
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
