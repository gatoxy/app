import { tmdb } from "../services/tmdb";
import { Genre } from "../types";

interface ResponseMediaTMDB {
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

interface ResponseVideoListTMDB {
  id: number;
  results: Array<{
    key: string;
    name: string;
    site: string;
    id: string;
  }>;
}

interface ResponseDetailsTMDB {
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
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: number;
  number_of_seasons: number;
}

interface ResponseCastTMDB {
  cast: Array<{
    id: number;
    known_for_department: string;
    name: string;
    profile_path: string | null;
  }>;
}

export async function getUpcoming() { // Carousel - Movies
  const response = await tmdb.get<ResponseMediaTMDB>("/movie/upcoming");

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
  const response = await tmdb.get<ResponseMediaTMDB>(`/${media}/popular?page=${page}`);

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


export async function getRecommendations(media: string, id: number) {
  const response = await tmdb.get<ResponseMediaTMDB>(`/${media}/${id}/recommendations`);

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
    results: results,
  }
}

export async function getVideos(media: string, id: number) {
  const response = await tmdb.get<ResponseVideoListTMDB>(`/${media}/${id}/videos`);

  return response.data.results;
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
  const response = await tmdb.get<ResponseMediaTMDB>(`/search/${media}?query=${query}&page=${page}`);

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

export async function getDetails(media: string, id: number) {
  const response = await tmdb.get<ResponseDetailsTMDB>(`/${media}/${id}`);

  const result = {
    type: media,
    id: response.data.id,
    poster_path: response.data.poster_path,
    backdrop_path: response.data.backdrop_path,
    overview: response.data.overview,
    title: response.data.title || response.data.name,
    release_date: response.data.release_date || response.data.first_air_date,
    vote_average: response.data.vote_average,
    genres: response.data.genres,
    duration: response.data.runtime || response.data.number_of_seasons,
  }

  return result;
}

export async function getCredits(media: string, id: number) {
  const response = await tmdb.get<ResponseCastTMDB>(`/${media}/${id}/credits`);

  const cast = response.data.cast.map(person => {
    return {
      id: person.id,
      known_for_department: person.known_for_department,
      name: person.name,
      profile_path:person.profile_path,
    }
  });

  return cast;
}