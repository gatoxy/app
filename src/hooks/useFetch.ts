import { tmdb } from "../services/tmdb";
import { Movie } from "../types";

interface ResponseMovieListTMDB {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
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