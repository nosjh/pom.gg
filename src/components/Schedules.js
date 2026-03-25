import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.Schedules().then((data) => setMatches(data));
  }, []);

  return (
    <div className="schedul-container">
      <div>
        {matches.map((match, idx) => (
          <ScheduleList
    key={match.id}
    match={match}
    showDate={idx % 2 !== 0}
  />
        ))}
      </div>
    </div>
  );
}
export default Schedules;
