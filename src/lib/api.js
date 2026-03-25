import axiosInstance from "./axiosInstance";

const SERIE_ID = 9164;        // 시즌 전체 — 일정, 팀목록, 선수
// const TOURNAMENT_ID = 16306;  // 정규시즌 토너먼트 — 순위만


export const Standings = async () => {
  const response = await axiosInstance.get("/api/standings");
  return response.data || [];
};

export const Schedules = async () => {
  const response = await axiosInstance.get("/api/matches", {
    params: { "filter[serie_id]": SERIE_ID, sort: "-begin_at", per_page: 100 }
  });
  return response.data || [];
};

export const Teams = async () => {
  const response = await axiosInstance.get("/api/teams");
  return response.data || [];
};
export const RostersT1 = async (teamId) => {
  try {
    const response = await axiosInstance.get(
      `/lol/teams/${teamId}/players`
    );
    return response.data || [];
  } catch (e) {return[];}
};
