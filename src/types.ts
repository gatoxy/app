export type Movie = {
  id: number;
  poster_path: string | null;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export type Serie = {
  id: number;
  poster_path: string | null;
  overview: string;
  first_air_date: string;
  name: string;
  vote_average: number;
}