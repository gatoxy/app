import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Carousel } from "../../components/Carousel";
import { Layout } from "../../components/Layout";
import { getDetails, getPopular, getUpcoming } from "../../hooks/useFetch";
import { Media, MediaDetails } from "../../types";

export function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState<Media[]>([]);
  const [popularMovies, setPopularMovies] = useState<Media[]>([]);
  const [popularSeries, setPopularSeries] = useState<Media[]>([]);
  const [movieFixed, setMovieFixed] = useState<MediaDetails>({} as MediaDetails);

  useEffect(() => {
    getUpcoming().then(response => setUpcomingMovies(response.results));
    getPopular("movie").then(response => setPopularMovies(response.results));
    getPopular("tv").then(response => setPopularSeries(response.results));
    getDetails("movie", 634649).then(response => setMovieFixed(response));
  }, []);

  return (
    <Layout>
      <Banner data={movieFixed} />

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