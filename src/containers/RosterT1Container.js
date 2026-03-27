import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import RosterT1 from "./../components/rosters/RosterT1";
import "../styles/RosterContainer.scss";

function RosterT1Container({ teamId }) {
  const [rostersT1, setRostersT1] = useState([]);
  useEffect(() => {
    api.RostersT1(teamId).then(function (response) {
      setRostersT1(response);
    });
  }, [teamId]);

  return (
    <div className="roster-container">
      <div className="info-player Poppins-Regular font-12">
        {/* <div>CLUB</div> */}
        <div>PLAYER</div>
        <div>POSITION</div>
        <div>NATION</div>
        {/* <div>BIRTH</div> */}
      </div>
      <div>
        {rostersT1.map((rosterT1) => {
          return <RosterT1 key={rosterT1.id} player={rosterT1} />;
        })}
      </div>
    </div>
  );
}

export default RosterT1Container;
