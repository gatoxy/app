export type Media = {
  type: "movie" | "serie",
  id: number;
  poster_path: string | null;
  overview: string;
  title: string;
  release_date: string;
  vote_average: number;
}