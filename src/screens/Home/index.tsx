import { useEffect, useState } from "react";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { getPopular, getTopRated, getUpcoming } from "../../hooks/useFetch";
import { Movie } from "../../types";

export function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getUpcoming().then(response => setUpcomingMovies(response.results));
    getPopular().then(response => setPopularMovies(response.results));
    getTopRated().then(response => setTopRatedMovies(response.results));
  }, []);

  return (
    <Layout>
      <Carousel
        title="Filmes que serão lançados em breve"
        data={upcomingMovies}
      />

      <Carousel
        title="Filmes populares recomendados para você"
        data={popularMovies}
      />

      <Carousel
        title="Filmes mais votados"
        data={topRatedMovies}
      />
    </Layout>
  );
}