import { useEffect, useState } from "react";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { getPopular, getUpcoming } from "../../hooks/useFetch";
import { Media } from "../../types";

export function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);

  useEffect(() => {
    getUpcoming().then(response => setUpcomingMovies(response.results));
    getPopular("movie").then(response => setPopularMovies(response.results));
    getPopular("tv").then(response => setPopularSeries(response.results));
  }, []);

  return (
    <Layout>
      <Carousel
        title="Filmes que serão lançados em breve"
        data={upcomingMovies}
      />

      <Carousel
        title="Filmes recomendados para você"
        data={popularMovies}
      />

      <Carousel
        title="Séries recomendados para você"
        data={popularSeries}
      />
    </Layout>
  );
}