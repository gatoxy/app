import axios from "axios";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Authorization": `Bearer`,
    "Content-Type": "application/json;charset=utf-8",
  }
});