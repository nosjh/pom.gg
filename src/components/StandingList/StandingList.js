import React from "react";
import "../../styles/StandingList.scss";

function StandingList({ standing }) {
  const { rank, wins, losses, game_wins, game_losses, team } = standing;
  const gameDiff = game_wins - game_losses; // 세트 득실차 계산
  const gameDiffStr = gameDiff > 0 ? `+${gameDiff}` : `${gameDiff}`; // 양수면 + 붙이기
  
  return (
    <div className="info-team Poppins-Medium font-12">
      <div>{rank}</div>                          
      <div><img src={team.image_url} alt={team.name} /></div>  
      <div>{team.name}</div>
      <div>{game_wins}W {game_losses}L</div>  {/* SET W-L */}
      <div>{wins}W {losses}L</div>            {/* W-L */}
      <div>{gameDiffStr}</div>                {/* 세트 득실차 */}
    </div>
  );
}

export default StandingList;
