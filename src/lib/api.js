import axiosInstance from "./axiosInstance";

const SERIE_ID = 9164;

export const Standings = async () => {
  try {
    const response = await axiosInstance.get("lol/tournaments", {
      params: {"filter[serie_id": SERIE_ID}
    });
    // console.log(response);
    return response.data || [];
  } catch (e) {return[];}
};

export const Schedules = async () => {
  try {
    const response = await axiosInstance.get("lol/matches", {
      params: {"filter[serie_id]": SERIE_ID, sort: "-begin_at", per_page: 100}
    })
    return response.data || [];
  } catch (e) {return[];}
};

export const RostersT1 = async (teamId) => {
  try {
    const response = await axiosInstance.get(
      `/lol/teams/${teamId}/players`
    );
    return response.data || [];
  } catch (e) {return[];}
};
