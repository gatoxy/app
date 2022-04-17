export type Media = {
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

export type Genre = {
  id: number;
  name: string;
}

export type MediaDetails = {
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

export type Cast = {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string | null;
}