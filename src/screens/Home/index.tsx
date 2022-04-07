import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";
import { useApp } from "../../contexts/AppContext";
import { TMDBItem } from "../../types";

export function Home() {
  const { getUpcoming, getPopular } = useApp();

  const [upcomingMovies, setUpcomingMovies] = useState<TMDBItem[]>([]);
  const [popularMovies, setPopularMovies] = useState<TMDBItem[]>([]);
  const [popularSeries, setPopularSeries] = useState<TMDBItem[]>([]);

  useEffect(() => {
    getUpcoming("movie").then(response => setUpcomingMovies(response.results));
    getPopular("movie", 1).then(response => setPopularMovies(response.results));
    getPopular("tv", 1).then(response => setPopularSeries(response.results));
  }, []);

  return (
    <Layout>
      <CardList
        title="Filmes que serão lançados em breve"
        data={upcomingMovies}
      />

      <CardList
        title="Filmes recomendados para você"
        data={popularMovies}
      />

      <CardList
        title="Séries recomendadas para você"
        data={popularSeries}
      />
    </Layout>
  );
}