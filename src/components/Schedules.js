import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.Schedules().then((data) => setMatches(data));
  }, []);

  // UTC 날짜 문자열 추출 함수 (YYYY-MM-DD)
  const getDateKey = (begin_at) => begin_at ? begin_at.slice(0, 10) : "";

  // 날짜 표시용 포맷 함수
  const formatDate = (begin_at) => {
    if (!begin_at) return "";
    const [year, month, day] = begin_at.slice(0, 10).split("-");
    return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
  };

  return (
    <div className="schedul-container">
      <div>
        {matches.map((match, idx) => {
          const dateKey = getDateKey(match.begin_at);
          const prevDateKey = idx > 0 ? getDateKey(matches[idx - 1].begin_at) : "";
          const showDate = idx === 0 || dateKey !== prevDateKey;

          return (
            <ScheduleList
              key={match.id}
              match={match}
              showDate={showDate}
              dateStr={formatDate(match.begin_at)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Schedules;
