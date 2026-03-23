import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export default axiosInstance;