import axiosInstance from "./axiosInstance";

const SERIE_ID = 9164;        // 시즌 전체 — 일정, 팀목록, 선수
const TOURNAMENT_ID = 16306;  // 정규시즌 토너먼트 — 순위만


export const Standings = async () => {
  try {
    const response = await axiosInstance.get("/lol/matches", {
      params: {
        "filter[tournament_id]": TOURNAMENT_ID,
        "filter[status]": "finished",
        per_page: 100,
      },
    });

    const matches = response.data || [];
    const teamMap = {};

    matches.forEach((match) => {
      // 팀 초기화
      match.opponents?.forEach(({ opponent }) => {
        if (!teamMap[opponent.id]) {
          teamMap[opponent.id] = {
            team: opponent,
            wins: 0,
            losses: 0,
            game_wins: 0,
            game_losses: 0,
          };
        }
      });

      // 매치 승/패 집계
      const winner_id = match.winner_id;
      match.opponents?.forEach(({ opponent }) => {
        if (opponent.id === winner_id) {
          teamMap[opponent.id].wins += 1;
        } else {
          teamMap[opponent.id].losses += 1;
        }
      });

      // 세트 스코어 집계 — results 배열에서 직접 읽음
      match.results?.forEach(({ team_id, score }) => {
        if (teamMap[team_id]) {
          // 상대방 score 계산
          const opponentResult = match.results.find(r => r.team_id !== team_id);
          teamMap[team_id].game_wins += score;
          teamMap[team_id].game_losses += opponentResult?.score || 0;
        }
      });
    });

    // 승수 → 세트 득실차 순으로 정렬
    return Object.values(teamMap)
      .sort((a, b) =>
        b.wins - a.wins ||
        (b.game_wins - b.game_losses) - (a.game_wins - a.game_losses)
      )
      .map((item, index) => ({ ...item, rank: index + 1 }));

  } catch (e) { return []; }
};

export const Schedules = async () => {
  try {
    const response = await axiosInstance.get("lol/matches", {
      params: {"filter[serie_id]": SERIE_ID, sort: "-begin_at", per_page: 100}
    })
    return response.data || [];
  } catch (e) {return[];}
};

export const Teams = async () => {
  try {
    const response = await axiosInstance.get(`/lol/series/${SERIE_ID}/teams`);
    return response.data || [];
  } catch (e) { return []; }
};

export const RostersT1 = async (teamId) => {
  try {
    const response = await axiosInstance.get(
      `/lol/teams/${teamId}/players`
    );
    return response.data || [];
  } catch (e) {return[];}
};
