import React, { useState, useEffect } from "react";
import * as api from "../lib/api";
import ScheduleList from "./ScheduleList/ScheduleList";
import "../styles/Schedules.scss";

function Schedules() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.Schedules().then((data) => setMatches(data));
  }, []);

  // UTC → 한국 시간(+9) 변환 후 날짜 키 추출
  const getDateKey = (begin_at) => {
    if (!begin_at) return "";
    const date = new Date(begin_at);
    date.setHours(date.getHours() + 9);
    return date.toISOString().slice(0, 10);
  };

  // 날짜 표시용 포맷
  const formatDate = (begin_at) => {
    if (!begin_at) return "";
    const date = new Date(begin_at);
    date.setHours(date.getHours() + 9);
    const [year, month, day] = date.toISOString().slice(0, 10).split("-");
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