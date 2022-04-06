import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Layout } from "../../components/Layout";
import { useApp } from "../../contexts/AppContext";
import { Media } from "../../types";

export function Home() {
  const { getUpcoming, getPopular } = useApp();

  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);

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
        media="movie"
      />

      <CardList
        title="Filmes recomendados para você"
        data={popularMovies}
        media="movie"
      />

      <CardList
        title="Séries recomendadas para você"
        data={popularSeries}
        media="serie"
      />
    </Layout>
  );
}