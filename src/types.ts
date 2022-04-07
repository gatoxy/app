export type TMDBItem = {
  type: "movie" | "tv";
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  title: string;
  release_date: string;
  vote_average: number;
}