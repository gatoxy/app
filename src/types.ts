export type Movie = { // Card Movie
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