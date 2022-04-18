export type MediaType = {
  type: string;
  id: number;
  poster_path: string | null;
  backdrop_path: string;
  overview: string;
  title: string;
  release_date: string;
  vote_average: number;
  genre_ids: Array<number>;
}

export type GenreType = {
  id: number;
  name: string;
}

export type DetailsType = {
  type: string;
  id: number;
  poster_path: string | null;
  backdrop_path: string;
  overview: string;
  title: string;
  release_date: string;
  vote_average: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  duration: number; // seasons or runtime
}

export type CastType = {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string | null;
}

export type VideoType = {
  key: string;
  name: string;
  site: string;
  id: string;
}