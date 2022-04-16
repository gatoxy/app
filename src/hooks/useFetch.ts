import { tmdb } from "../services/tmdb";
import { Genre } from "../types";

interface ResponseMovieListTMDB {
  page: number;
  results: Array<{
    type: string;
    id: number;
    poster_path: string | null;
    backdrop_path: string;
    overview: string;
    title: string;
    name: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    genre_ids: Array<number>;
  }>;
  total_pages: number;
  total_results: number;
}

interface ResponseGenreListTMDB {
  genres: Array<Genre>;
}

export async function getUpcoming() { // Carousel - Movies
  const response = await tmdb.get<ResponseMovieListTMDB>("/movie/upcoming");

  const results = response.data.results.map(movie => {
    return {
      type: "movie",
      id: movie.id,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      genre_ids: movie.genre_ids,
    }
  });

  return {
    page: response.data.page,
    results: results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  }
}

export async function getPopular(media: string, page: number = 1) { // Movies or TV Series
  const response = await tmdb.get<ResponseMovieListTMDB>(`/${media}/popular?page=${page}`);

  const results = response.data.results.map(item => {
    return {
      type: media,
      id: item.id,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
      overview: item.overview,
      title: item.title || item.name,
      release_date: item.release_date || item.first_air_date,
      vote_average: item.vote_average,
      genre_ids: item.genre_ids,
    }
  });

  return {
    page: response.data.page,
    results: results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  }
}


export async function getRecommendations(id: number) {

}

export async function getPerson(id: number) {

}

export async function getVideos(id: number) {

}

export async function getGenres() {
  const movies = await tmdb.get<ResponseGenreListTMDB>(`/genre/movie/list`);
  const series = await tmdb.get<ResponseGenreListTMDB>(`/genre/tv/list`);

  const genres = [...movies.data.genres, ...series.data.genres];

  return {
    genres: genres,
  }
}

export async function search(media: string, query: string, page: number) {
  const response = await tmdb.get<ResponseMovieListTMDB>(`/search/${media}?query=${query}&page=${page}`);

  const results = response.data.results.map(item => {
    return {
      type: media,
      id: item.id,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
      overview: item.overview,
      title: item.title || item.name,
      release_date: item.release_date || item.first_air_date,
      vote_average: item.vote_average,
      genre_ids: item.genre_ids,
    }
  });

  return {
    page: response.data.page,
    results: results,
    total_pages: response.data.total_pages,
    total_results: response.data.total_results,
  }
}