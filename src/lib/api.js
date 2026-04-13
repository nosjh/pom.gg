import axiosInstance from "./axiosInstance";

// const SERIE_ID = 10419;        // 시즌 전체 
const TOURNAMENT_ID = 20577;  // 정규시즌 


export const Standings = async () => {
  const response = await axiosInstance.get("/api/standings");
  return response.data || [];
};

export const Schedules = async () => {
  const response = await axiosInstance.get("/api/matches", {
    params: { "filter[tournament_id]": TOURNAMENT_ID,
              "filter[status]": "finished", 
              sort: "-begin_at", 
              per_page: 100 }
  });
  return response.data || [];
};

export const Teams = async () => {
  const response = await axiosInstance.get("/api/teams");
  return response.data || [];
};

export const RostersT1 = async (teamId) => {
  try {
    const response = await axiosInstance.get("/api/players", {
      params: { teamId }
    });
    return response.data || [];
  } catch (e) { return []; }
};

