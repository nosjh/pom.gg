import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.Schedules().then((data) => setMatches(data));
  }, []);

  let lastDate = null;

  return (
    <div className="schedul-container">
      <div>
        {matches.map((match) => {
          const dateStr = match.begin_at
            ? new Date(match.begin_at).toLocaleDateString("ko-KR", {
                year: "numeric", month: "long", day: "numeric",
              })
            : "";
          const showDate = dateStr !== lastDate;
          lastDate = dateStr;

          return (
            <ScheduleList key={match.id} match={match} showDate={showDate} />
          );
        })}
      </div>
    </div>
  );
}

export default Schedules;
