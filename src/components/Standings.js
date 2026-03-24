import React, { useState, useEffect } from "react";
import "../styles/Standings.scss";
import StandingList from "./../components/StandingList/StandingList";
import * as api from "../lib/api";

function Standings() {
  const [standings, setStandings] = useState([]);
  useEffect(() => {
    api.Standings().then((data) => {
      setStandings(data);
    });
  }, []);

  return (
    <div className="standings-container">
      <div className="info-name Poppins-Regular font-12">
        <div>RANK</div>
        <div>CLUB</div>
        <div>POINT</div>
        <div>SET W-L</div>
        <div>W-L</div>
      </div>
      <div>
        {standings.map((standing) => (
          <StandingList key={standing.team.id} standing={standing} />
        ))}
      </div>
    </div>
  );
}

export default Standings;
