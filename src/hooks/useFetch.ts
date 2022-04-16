import { tmdb } from "../services/tmdb";
import { Genre, Movie } from "../types";

interface ResponseMovieListTMDB {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

interface ResponseGenreListTMDB {
  genres: Array<Genre>;
}

export async function getUpcoming() { // Carousel
  const response = await tmdb.get<ResponseMovieListTMDB>("/movie/upcoming");

  const results = response.data.results.map(movie => {
    return {
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

export async function getTopRated() { // Carousel
  const response = await tmdb.get<ResponseMovieListTMDB>("/movie/top_rated");

  const results = response.data.results.map(movie => {
    return {
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

export async function getPopular(page: number = 1) {
  const response = await tmdb.get<ResponseMovieListTMDB>(`/movie/popular?page=${page}`);

  const results = response.data.results.map(movie => {
    return {
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

export async function getCredits(id: number) {

}

export async function getRecommendations(id: number) {

}

export async function getPerson(id: number) {

}

export async function getVideos(id: number) {

}

export async function getGenres() {
  const response = await tmdb.get<ResponseGenreListTMDB>(`/genre/movie/list`);

  return {
    genres: response.data.genres,
  }
}

export async function searchMovies(query: string, page: number) {
  const response = await tmdb.get<ResponseMovieListTMDB>(`/search/movie?query=${query}&page=${page}`);

  const results = response.data.results.map(movie => {
    return {
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