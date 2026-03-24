import { useState, useEffect } from "react";
import "../styles/Rosters.scss";
import RosterT1Container from "../containers/RosterT1Container";
import * as api from "../lib/api";

function Rosters() {
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState(null);
  const [style, setStyle] = useState("optionList");
  
  useEffect(() => {
    api.Teams().then((data) => {
      setTeams(data);
      if (data.length > 0) setTeamId(data[0].id);
    });
  }, []);

  const changeStyle = () => {
    style === "optionList"
      ? setStyle("optionListShow")
      : setStyle("optionList");
  };

  const handleClick = (id) => {
    setTeamId(id);
    changeStyle();
  };

  return (
    <div className="rosters-container">
      {/* 선택버튼 */}
      <div className="selectBox Poppins-Medium font-12">
        <button className="label" onClick={changeStyle}>
          <img src={`img/lck.svg`} alt="league logo" />
          SELECT TEAM
        </button>
        <ul className={style}>
          {teams.map((team) => (
            <li
              className="optionItem"
              key={team.id}
              onClick={() => {
                handleClick(team.id);
              }}
            >
              <img src={team.image_url} alt={team.name} />
              {team.acronym}
            </li>
          ))}
        </ul>
      </div>
      {/* 선수 정보 */}
      <div>
        {teamId && <RosterT1Container className="rosters" teamId={teamId} />}
      </div>
    </div>
  );
}

export default Rosters;
