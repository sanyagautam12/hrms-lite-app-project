import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-lite-app-project.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
