import axios from "axios";

import { TMDB_API_KEY } from "@env";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    "language": "pt-BR",
  },
  headers: {
    "Authorization": `Bearer ${TMDB_API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  }
});