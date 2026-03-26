import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.Schedules().then((data) => setMatches(data));
  }, []);

  const formatDate = (begin_at) => {
    if (!begin_at) return "";
    const [year, month, day] = begin_at.slice(0, 10).split("-");
    return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
  };

  return (
    <div className="schedul-container">
      <div>
        {matches.map((match, idx) => (
          <ScheduleList
            key={match.id}
            match={match}
            showDate={idx % 2 === 0} // 짝수(0,2,4) = 첫 번째 경기 → 날짜 표시
            dateStr={formatDate(match.begin_at)}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedules;