import React from "react";
import "../../styles/ScheduleList.scss";

function ScheduleList({ match }) {
  const { begin_at, opponents } = match;

  const teamA = opponents[0]?.opponent;
  const teamB = opponents[1]?.opponent;

  const dateStr = begin_at
    ? new Date(begin_at).toLocaleDateString("ko-KR", {
        year: "numeric", month: "long", day: "numeric",
      })
    : "";

  return (
    <div className="info-schedule">
      <div className="date Pretendard-Regular font-14">{dateStr}</div>
      <div className="info-match Poppins-Medium font-14">
        <div className="teamA">
          <div className="NameA">{teamA?.acronym}</div>
          <div className="logoA">
            <img src={teamA?.image_url} alt="team logo" />
          </div>
        </div>
        <div className="score">
          <div className="vs">VS</div>
        </div>
        <div className="teamB">
          <div className="logoB">
            <img src={teamB?.image_url} alt="team logo" />
          </div>
          <div className="NameB">{teamB?.acronym}</div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleList;
