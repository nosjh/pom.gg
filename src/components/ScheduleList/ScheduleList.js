import React from "react";
import "../../styles/ScheduleList.scss";

function ScheduleList({ match, showDate }) {
  const { begin_at, opponents, results } = match;

  const teamA = opponents?.[0]?.opponent;
  const teamB = opponents?.[1]?.opponent;

  // results에서 세트스코어 추출
  const scoreA = results?.find(r => r.team_id === teamA?.id)?.score ?? null;
  const scoreB = results?.find(r => r.team_id === teamB?.id)?.score ?? null;
  const hasScore = scoreA !== null && scoreB !== null;

  const dateStr = begin_at
    ? new Date(begin_at).toLocaleDateString("ko-KR", {
        year: "numeric", month: "long", day: "numeric",
      })
    : "";

  return (
    <div>
      {showDate && (
        <div className="date Pretendard-Regular font-14">{dateStr}</div>
      )}
      <div className="info-schedule">
        <div className="info-match Poppins-Medium font-14">
          <div className="teamA">
            <div className="NameA">{teamA?.acronym}</div>
            <div className="logoA">
              <img src={teamA?.image_url} alt={teamA?.name} />
            </div>
          </div>
          <div className="score">
            {hasScore ? (
              <>
                <div className="scoreA font-18">{scoreA}</div>
                <div className="vs">vs</div>
                <div className="scoreB font-18">{scoreB}</div>
              </>
            ) : (
              <div className="vs">VS</div>
            )}
          </div>
          <div className="teamB">
            <div className="logoB">
              <img src={teamB?.image_url} alt={teamB?.name} />
            </div>
            <div className="NameB">{teamB?.acronym}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleList;