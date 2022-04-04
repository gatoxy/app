import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";
import { useApp } from "../../contexts/AppContext";
import { Movie, Serie } from "../../types";

export function Home() {
  const { upcoming, popular } = useApp();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    popular("movie", 1).then(response => setMovies(response.results));
    popular("tv", 1).then(response => setSeries(response.results));
  }, []);

  return (
    <Layout>
      <CardList
        title="Filmes recomendados para você"
        data={movies}
        media="movie"
      />

      <CardList
        title="Séries recomendadas para você"
        data={series}
        media="serie"
      />
    </Layout>
  );
}