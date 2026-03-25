import axiosInstance from "./axiosInstance";

const SERIE_ID = 9164;        // 시즌 전체 — 일정, 팀목록, 선수
const TOURNAMENT_ID = 16306;  // 정규시즌 토너먼트 — 순위만


export const Standings = async () => {
  try {
    const response = await axiosInstance.get(
      `/tournaments/${TOURNAMENT_ID}/standings`
    );
    return response.data || [];
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
